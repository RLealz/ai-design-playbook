import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';

interface ToolStep {
  id: string;
  tool: string;
  target: string;
  durationMs: number;
  status: 'done' | 'running' | 'approval';
}

const INITIAL_STEPS: ToolStep[] = [
  { id: 't1', tool: 'schema.inspect', target: 'orders_partition_2026_q4', durationMs: 42, status: 'done' },
  { id: 't2', tool: 'index.simulate', target: 'idx_orders_tenant_created_at', durationMs: 118, status: 'done' },
  { id: 't3', tool: 'migration.propose', target: 'CREATE INDEX CONCURRENTLY ...', durationMs: 0, status: 'approval' },
];

const COMMANDS = [
  { id: 'c1', label: 'Run Concurrent Index Simulation', shortcut: '⇧⌘I' },
  { id: 'c2', label: 'Toggle Navigation Rail', shortcut: '[' },
  { id: 'c3', label: 'Export Telemetry Snapshot (JSON)', shortcut: '⇧⌘E' },
  { id: 'c4', label: 'Switch Cluster: prod-eu-central-1', shortcut: '⌘1' },
];

export function CockpitApp() {
  const [railCollapsed, setRailCollapsed] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setPaletteOpen(false);
      } else if (e.key === '[' && document.activeElement?.tagName !== 'INPUT') {
        setRailCollapsed((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const filteredCommands = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="h-screen w-screen overflow-hidden grid" style={{ gridTemplateColumns: `${railCollapsed ? '56px' : '228px'} 1fr 380px` }}>
      {/* Zone 1: Collapsible Navigation Rail */}
      <aside className="border-r border-white/10 bg-[#0d0f17] flex flex-col justify-between p-3">
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            {!railCollapsed && <span className="font-semibold tracking-tight text-sm">Aegis Cockpit</span>}
            <button
              onClick={() => setRailCollapsed((v) => !v)}
              className="text-xs font-mono px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300"
              title="Toggle rail ([)"
            >
              [
            </button>
          </div>
          <nav className="space-y-1 text-sm">
            {['Active Runs', 'Query Traces', 'Schema Guard', 'SLOs & Cost'].map((item, idx) => (
              <button
                key={item}
                className={`w-full text-left px-2.5 py-2 rounded-lg transition ${
                  idx === 0 ? 'bg-white/10 text-white font-medium' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {railCollapsed ? item[0] : item}
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={() => setPaletteOpen(true)}
          className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10"
        >
          {!railCollapsed && <span>Commands</span>}
          <kbd className="font-mono text-[11px] text-slate-400">⌘K</kbd>
        </button>
      </aside>

      {/* Zone 2: Primary Streaming Agent & Tool Execution Canvas */}
      <main className="flex flex-col h-full overflow-hidden">
        <header className="h-13 border-b border-white/10 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium">Run #4092 — P99 Checkout Latency Remediation</span>
          </div>
          <span className="font-mono text-xs text-slate-400 tabular-nums">prod-us-east · 14.2k req/s</span>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {INITIAL_STEPS.map((step) => (
            <div key={step.id} className="panel-specular rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300">{step.tool}</span>
                  <span className="text-slate-300 truncate max-w-md">{step.target}</span>
                </div>
                <span className="font-mono text-xs text-slate-400 tabular-nums">
                  {step.status === 'done' ? `${step.durationMs} ms` : approved ? 'Applied' : 'Awaiting Gate'}
                </span>
              </div>

              {step.status === 'approval' && !approved && (
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <p className="text-xs text-slate-300">
                    Predicted P99 reduction: <strong className="text-emerald-400 tabular-nums">184ms → 19ms (-89.6%)</strong> with zero table lock.
                  </p>
                  <button
                    onClick={() => setApproved(true)}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 active:scale-[0.98] text-xs font-medium text-white transition"
                  >
                    Approve & Execute
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Zone 3: Contextual Telemetry & Artifact Sidecar */}
      <aside className="border-l border-white/10 bg-[#0d0f17] p-5 space-y-5 overflow-y-auto">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Live Cluster Telemetry</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="panel-specular rounded-xl p-3.5">
              <span className="text-xs text-slate-400">P99 Query Time</span>
              <div className="text-xl font-semibold mt-1 tabular-nums text-emerald-400">
                {approved ? '18.8 ms' : '184.2 ms'}
              </div>
            </div>
            <div className="panel-specular rounded-xl p-3.5">
              <span className="text-xs text-slate-400">Buffer Hit Ratio</span>
              <div className="text-xl font-semibold mt-1 tabular-nums">99.94%</div>
            </div>
          </div>
        </div>

        <div className="panel-specular rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-slate-300">Latency Sparkline (60m)</span>
            <span className="font-mono text-[11px] text-slate-400 tabular-nums">60s buckets</span>
          </div>
          <svg viewBox="0 0 280 72" className="w-full h-18">
            <polyline
              fill="none"
              stroke={approved ? '#34d399' : '#6e7bf2'}
              strokeWidth="2"
              points={
                approved
                  ? '0,22 45,26 90,20 135,24 180,58 225,60 280,61'
                  : '0,22 45,26 90,18 135,24 180,15 225,19 280,16'
              }
            />
          </svg>
        </div>
      </aside>

      {/* Universal Cmd+K Command Palette */}
      {paletteOpen && (
        <div
          className="fixed inset-0 bg-black/65 backdrop-blur-xs flex items-start justify-center pt-24 z-50"
          onClick={() => setPaletteOpen(false)}
        >
          <div
            className="panel-specular w-full max-w-lg rounded-2xl p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or cluster..."
              className="w-full bg-transparent px-3 py-2.5 text-sm outline-none border-b border-white/10"
            />
            <div className="mt-2 space-y-1">
              {filteredCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => setPaletteOpen(false)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-left"
                >
                  <span>{cmd.label}</span>
                  <kbd className="font-mono text-xs text-slate-400">{cmd.shortcut}</kbd>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<CockpitApp />);

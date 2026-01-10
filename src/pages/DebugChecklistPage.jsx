import React, { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ftc-debug-checklist-v1';

const checklistSections = [
  {
    title: 'Pre-Match Checks',
    items: [
      'Robot battery above 13.0V',
      'Controllers paired and gamepads charged',
      'All screws and zip ties tight',
      'Motors free to spin, no wires dragging',
      'Autonomous selected on Driver Station',
    ],
  },
  {
    title: 'Common Bugs',
    items: [
      'Robot drives backward when pushing forward',
      'One side of drive not moving',
      'Servo not moving to the expected position',
      'Telemetry not updating',
      'OpMode not showing on Driver Station',
    ],
  },
  {
    title: 'If X Doesn’t Work, Check Y',
    items: [
      'If the robot spins, check motor directions',
      'If a motor is dead, check the config name',
      'If auto stops early, check timeouts and timers',
      'If input is sticky, check button debounce',
      'If lift stalls, check power limits or safety checks',
    ],
  },
];

const DebugChecklistPage = () => {
  const initialState = useMemo(() => {
    if (typeof window === 'undefined') return {};
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Failed to load checklist', error);
      return {};
    }
  }, []);

  const [checkedItems, setCheckedItems] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleToggle = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetChecklist = () => setCheckedItems({});

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Debug & Pit Checklist</h1>
        <p className="mt-2 text-gray-600">
          Check items as you go. This checklist saves locally on this device.
        </p>
        <button
          type="button"
          onClick={resetChecklist}
          className="mt-4 inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
        >
          Reset checklist
        </button>
      </header>

      <div className="mt-8 space-y-6">
        {checklistSections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => {
                const key = `${section.title}-${item}`;
                return (
                  <li key={key} className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-googlebox-blue focus:ring-googlebox-blue"
                      checked={Boolean(checkedItems[key])}
                      onChange={() => handleToggle(key)}
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default DebugChecklistPage;

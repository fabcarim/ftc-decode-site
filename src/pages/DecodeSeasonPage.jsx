import React from 'react';

const decodeRows = [
  {
    task: 'Score a game element',
    mechanism: 'Intake + lift',
    sensors: 'Distance sensor',
    module: 'IntakeSubsystem + LiftSubsystem',
    test: 'Collect 5 pieces in a row',
  },
  {
    task: 'Drive to target zone',
    mechanism: 'Drive train',
    sensors: 'IMU + encoder',
    module: 'DriveController',
    test: 'Drive 1 meter straight',
  },
  {
    task: 'Align to field wall',
    mechanism: 'Drive train',
    sensors: 'IMU',
    module: 'HeadingHold',
    test: 'Hold 0° heading for 3 seconds',
  },
  {
    task: 'Place game piece',
    mechanism: 'Arm + claw',
    sensors: 'Limit switch',
    module: 'ArmStateMachine',
    test: 'Open/close claw 10 times',
  },
  {
    task: 'Park in endgame',
    mechanism: 'Drive train',
    sensors: 'None / timer',
    module: 'AutoStepSequence',
    test: 'Stop inside zone consistently',
  },
];

const DecodeSeasonPage = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">DECODE Season</h1>
        <p className="mt-2 text-gray-600">
          Use this mapping to turn a game task into a mechanism, sensors, code modules, and tests.
          This is conceptual and does not include game spoilers.
        </p>
      </header>

      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-4 py-3">Game Task</th>
              <th className="px-4 py-3">Mechanism</th>
              <th className="px-4 py-3">Sensors</th>
              <th className="px-4 py-3">Code Module</th>
              <th className="px-4 py-3">Test</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {decodeRows.map((row) => (
              <tr key={row.task} className="text-gray-700">
                <td className="px-4 py-4 font-medium text-gray-900">{row.task}</td>
                <td className="px-4 py-4">{row.mechanism}</td>
                <td className="px-4 py-4">{row.sensors}</td>
                <td className="px-4 py-4">{row.module}</td>
                <td className="px-4 py-4">{row.test}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DecodeSeasonPage;

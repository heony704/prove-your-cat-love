import { useState, useEffect, useCallback } from 'react';
import ScoreAlarm from 'src/components/ScoreAlarm';

export function useScoreAlarm(score: number) {
  const [alarmMode, setAlarmMode] = useState(false);

  const showAlarm = () => {
    setAlarmMode(true);
  };
  const hideAlarm = () => {
    setAlarmMode(false);
  };

  const showCondition = (score: number) => {
    if (score < 1) return false;
    if (score < 100 && score % 5 === 0) return true;
    if (score >= 100 && score % 50 === 0) return true;
  };

  useEffect(() => {
    if (showCondition(score)) {
      showAlarm();
    }
  }, [score]);

  const AlarmContainer = useCallback(() => {
    return <>{alarmMode && <ScoreAlarm score={score} onClose={hideAlarm} />}</>;
  }, [alarmMode]);

  return { ScoreAlarm: AlarmContainer, alarmScore: showAlarm };
}

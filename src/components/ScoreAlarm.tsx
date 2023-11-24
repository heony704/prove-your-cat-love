import React, { useEffect } from 'react';
import { getThemeByScore } from 'src/data/scoreTheme';
import { useScoreStore } from 'src/store/useScoreStore';
import { useToast } from 'src/hooks/useToast';

function ScoreAlarm() {
  const { score } = useScoreStore();
  const { background, point } = getThemeByScore(score);

  const { toast, Toast } = useToast();

  const showCondition = (score: number) => {
    if (score < 1) return false;
    if (score < 100 && score % 5 === 0) return true;
    if (score >= 100 && score % 50 === 0) return true;
  };

  useEffect(() => {
    if (showCondition(score)) {
      toast(`${score}점 달성 !`, { background, point });
    }
  }, [score]);

  return <Toast />;
}

export default React.memo(ScoreAlarm);

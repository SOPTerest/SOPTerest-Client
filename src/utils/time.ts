export const getRelativeTime = (time: Date) => {
  const now = new Date();
  const createdAt = new Date(time);

  const seconds = 1;
  const minute = seconds * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const cumulativeTime = Math.trunc((now.getTime() - createdAt.getTime()) / 1000);

  let relativeTime = '';
  if (cumulativeTime < seconds) {
    relativeTime = '방금';
  } else if (cumulativeTime < minute) {
    relativeTime = cumulativeTime + '초';
  } else if (cumulativeTime < hour) {
    relativeTime = Math.trunc(cumulativeTime / minute) + '분';
  } else if (cumulativeTime < day) {
    relativeTime = Math.trunc(cumulativeTime / hour) + '시간';
  } else if (cumulativeTime < day * 15) {
    relativeTime = Math.trunc(cumulativeTime / day) + '일';
  } else {
    relativeTime = Math.trunc(cumulativeTime / (day * 7)) + '주';
  }
  return relativeTime;
};

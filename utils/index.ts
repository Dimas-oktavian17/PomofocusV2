export function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export const { format: formatNumber } = Intl.NumberFormat('en-GB', {
    notation: 'compact',
    maximumFractionDigits: 1
});

export function convertSecondsToMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${padTo2Digits(remainingSeconds)}`;
}

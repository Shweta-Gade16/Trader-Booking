'use client';

interface StatusBadgeProps {
  status: 'pending' | 'completed' | 'cancelled' | 'scheduled';
}

const badgeStyles = {
  pending: {
    bg: '#F9FAFB',
    border: '#EAECF0',
    dot: '#667085',
    text: '#667085',
  },
  completed: {
    bg: '#ECFDF3',
    border: '#ABEFC6',
    dot: '#17B26A',
    text: '#17B26A',
  },
  cancelled: {
    bg: '#FEF3F2',
    border: '#FECDCA',
    dot: '#F04438',
    text: '#F04438',
  },
  scheduled: {
    bg: '#EFF8FF',
    border: '#B2DDFF',
    dot: '#2E90FA',
    text: '#2E90FA',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { bg, border, dot, text } = badgeStyles[status] || badgeStyles.pending;

  return (
    <div
      className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 h-[24px] sm:h-[28px] rounded-full text-[14px] font-semibold"
      style={{
        backgroundColor: bg,
        border: `1px solid ${border}`,
      }}
    >
      <span
        className="w-[6px] h-[6px] rounded-full"
        style={{ backgroundColor: dot }}
      ></span>
      <span
        className="font-poppins capitalize"
        style={{ color: text }}
      >
        {status}
      </span>
    </div>
  );
}

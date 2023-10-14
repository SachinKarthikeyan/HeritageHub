'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
        px-4
        py-3
        font-semibold
        rounded-md
        hover:bg-neutral-100
        hover:transform hover:scale-105
        hover:transition-transform
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;

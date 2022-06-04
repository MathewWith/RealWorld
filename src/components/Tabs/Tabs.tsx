import { FC } from "react";
import classNames from "classnames";

export interface ITab {
  id: string | number;
  label?: string;
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: string | number) => void;
}

export const Tabs: FC<ITabsProps> = ({
  className,
  selectedId,
  tabs,
  onClick,
}) => {
  return (
    <div className={classNames("feed-toggle", className)}>
      {tabs &&
        tabs.map((tab) => (
          <button
            className={classNames("feed-toggle__button-none", {
              "feed-toggle__button": tab.id === selectedId,
            })}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={classNames("TabLabel", {
                TabLabel__selected: tab.id === selectedId,
              })}
            >
              {tab.label}
            </div>
          </button>
        ))}
    </div>
  );
};

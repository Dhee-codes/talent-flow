import { NotificationsHeader } from "./NotificationsHeader";
import { NotificationsTabs } from "./NotificationsTab";
import { NotificationsList } from "./NotificationsList";
import { EarlierThisWeek } from "./EarlierThisWeek";

export function NotificationsMain() {
  return (
    <div className="w-full">
      <NotificationsHeader />
      <NotificationsTabs />
      <NotificationsList />
      <EarlierThisWeek />
    </div>
  );
}
import { NotificationItem } from "./NotificationItem";

const notifications = [
  {
    id: 1,
    title: "Working with frames 101",
    description:
      "Your recent submission has been graded by Aris Thorne. You achieved a score of 94/100. Excellent work on the integration section",
    time: "12 mins ago",
    unread: true,
    urgent: false,
  },
  {
    id: 2,
    title: "You received a message from Aris Thorne",
    description:
      "Hey! Are we still meeting today at 5 PM for the next class? I'm ready when you are.",
    time: "12 mins ago",
    unread: false,
    urgent: false,
  },
  {
    id: 3,
    title: "New course materials uploaded",
    description: "Victor, a new course materials has just been uploaded",
    time: "52 mins ago",
    unread: false,
    urgent: false,
  },
  {
    id: 4,
    title: "Submission failed. Try again.",
    description: "Victor, your submission failed, retry submission again.",
    time: "Just now",
    unread: false,
    urgent: true,
  },
];

export function NotificationsList() {
  return (
    <div className="flex flex-col gap-3 mb-8">
      {notifications.map((n) => (
        <NotificationItem key={n.id} {...n} />
      ))}
    </div>
  );
}
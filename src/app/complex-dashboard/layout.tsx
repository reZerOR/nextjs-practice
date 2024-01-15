export default function DashboardLayout(props: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedin = true;
  return isLoggedin ? (
    <div>
      <div>{props.children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{props.users}</div>
          <div>{props.revenue}</div>
        </div>
        <div className="flex">{props.notification}</div>
      </div>
    </div>
  ) : (
    props.login
  );
}

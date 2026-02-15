import DashboardLayout from "@/components/DashboardLayout";

const History = () => {
  return (
    <DashboardLayout title="Generation History">
      <div className="max-w-5xl">
        <div className="glass rounded-xl p-6">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm">Your generation history will appear here.</p>
            <p className="text-muted-foreground text-xs mt-1">Enable Cloud to persist your generations.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;

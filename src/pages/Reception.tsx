import { Header } from "@/components/Header";
import { AppointmentCard } from "@/components/AppointmentCard";
import { QuickActions } from "@/components/QuickActions";
import { TaskList } from "@/components/TaskList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const appointments = [
  {
    patientName: "سارة إبراهيم",
    time: "06:30 م",
    phone: "+966 50 123 4567",
    type: "كشف عام",
    status: "arrived" as const,
  },
  {
    patientName: "محمد عبدالله",
    time: "07:00 م",
    phone: "+966 55 234 5678",
    type: "متابعة",
    status: "waiting" as const,
  },
  {
    patientName: "هدى مصطفى",
    time: "07:30 م",
    phone: "+966 54 345 6789",
    type: "استشارة",
    status: "confirmed" as const,
  },
  {
    patientName: "أحمد علي",
    time: "08:00 م",
    phone: "+966 56 456 7890",
    type: "كشف عام",
    status: "confirmed" as const,
  },
];

const Reception = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header
        title="عيادة الشفاء"
        userName="فاطمة محمود"
        userRole="موظف استقبال"
        notificationCount={3}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-xl">مواعيد اليوم - الأحد 20 أكتوبر 2025</CardTitle>
                <p className="text-sm opacity-90">إجمالي المواعيد: {appointments.length}</p>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {appointments.map((appointment, index) => (
                  <AppointmentCard key={index} {...appointment} />
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <QuickActions />
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reception;

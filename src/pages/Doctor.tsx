import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const patients = [
  {
    id: 1,
    order: 1,
    name: "سارة إبراهيم",
    time: "06:30 م",
    status: "inRoom" as const,
  },
  {
    id: 2,
    order: 2,
    name: "محمد عبدالله",
    time: "07:00 م",
    status: "waiting" as const,
  },
  {
    id: 3,
    order: 3,
    name: "هدى مصطفى",
    time: "07:30 م",
    status: "waiting" as const,
  },
];

const notifications = [
  {
    type: "urgent" as const,
    message: 'وصلت نتائج التحاليل الجديدة للمريض "أحمد علي"',
    action: "عرض النتائج",
  },
  {
    type: "info" as const,
    message: "لديك موعد متابعة مجدول عبر الإنترنت الساعة 9:00 م",
    action: null,
  },
];

const Doctor = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header
        title="لوحة تحكم الطبيب"
        userName="د. أحمد سعيد"
        userRole="طبيب عام"
        notificationCount={2}
      />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card>
          <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-xl">قائمة مرضى اليوم</CardTitle>
            <p className="text-sm opacity-90">الأحد 20 أكتوبر 2025</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-right p-4 font-semibold">الترتيب</th>
                    <th className="text-right p-4 font-semibold">اسم المريض</th>
                    <th className="text-right p-4 font-semibold">موعد الحجز</th>
                    <th className="text-right p-4 font-semibold">الحالة</th>
                    <th className="text-right p-4 font-semibold">إجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr
                      key={patient.id}
                      className="border-b border-border hover:bg-accent/50 transition-colors"
                    >
                      <td className="p-4">
                        <Badge variant="outline" className="text-base font-bold">
                          {patient.order}
                        </Badge>
                      </td>
                      <td className="p-4 font-semibold">{patient.name}</td>
                      <td className="p-4 text-muted-foreground">{patient.time}</td>
                      <td className="p-4">
                        {patient.status === "inRoom" ? (
                          <Badge className="bg-success hover:bg-success/90">
                            في غرفة الكشف
                          </Badge>
                        ) : (
                          <Badge variant="secondary">في الانتظار</Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <Button
                          onClick={() => navigate(`/patient/${patient.id}`)}
                          className="gap-2"
                        >
                          <FolderOpen className="h-4 w-4" />
                          افتح الملف
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              إشعارات هامة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  notification.type === "urgent"
                    ? "bg-destructive/5 border-destructive/20"
                    : "bg-accent/50 border-accent"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="flex-1">{notification.message}</p>
                  {notification.action && (
                    <Button variant="link" className="text-primary">
                      {notification.action}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Doctor;

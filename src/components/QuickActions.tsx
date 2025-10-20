import { CalendarPlus, UserPlus, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuickActions = () => {
  const actions = [
    { icon: CalendarPlus, label: "حجز موعد جديد", variant: "default" as const },
    { icon: UserPlus, label: "إضافة مريض", variant: "secondary" as const },
    { icon: Search, label: "البحث عن مريض", variant: "outline" as const },
    { icon: FileText, label: "التقارير", variant: "outline" as const },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="h-auto py-4 flex-col gap-2"
          >
            <action.icon className="h-6 w-6" />
            <span className="text-sm">{action.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

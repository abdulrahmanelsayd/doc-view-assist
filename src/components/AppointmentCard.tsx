import { Clock, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppointmentCardProps {
  patientName: string;
  time: string;
  phone: string;
  type: string;
  status: "confirmed" | "waiting" | "arrived" | "inProgress";
}

const statusConfig = {
  confirmed: { label: "مؤكد", variant: "secondary" as const },
  waiting: { label: "في الانتظار", variant: "default" as const },
  arrived: { label: "تم الوصول", variant: "default" as const },
  inProgress: { label: "في الكشف", variant: "default" as const },
};

export const AppointmentCard = ({
  patientName,
  time,
  phone,
  type,
  status,
}: AppointmentCardProps) => {
  const statusInfo = statusConfig[status];
  
  return (
    <Card className="hover:shadow-medium transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{patientName}</h3>
              <Badge variant={statusInfo.variant} className="text-xs">
                {statusInfo.label}
              </Badge>
            </div>
            
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span dir="ltr">{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{type}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <Button size="sm" variant="outline">
              تفاصيل
            </Button>
            {status === "waiting" && (
              <Button size="sm" className="bg-success hover:bg-success/90">
                بدء الكشف
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

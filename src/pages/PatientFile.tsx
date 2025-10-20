import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  Image as ImageIcon,
  AlertTriangle,
  Calendar,
  FileEdit,
  TestTube,
  CalendarCheck,
} from "lucide-react";

const previousVisits = [
  {
    date: "15 يونيو 2025",
    diagnosis: "التهاب حلق",
  },
  {
    date: "20 يناير 2025",
    diagnosis: "نزلة برد",
  },
  {
    date: "5 أغسطس 2024",
    diagnosis: "فحص دوري",
  },
];

const documents = [
  { type: "lab", name: "تحليل دم", date: "يونيو 2025" },
  { type: "xray", name: "صورة أشعة", date: "يناير 2025" },
];

const PatientFile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header
        title="ملف المريض"
        userName="د. أحمد سعيد"
        userRole="طبيب عام"
        notificationCount={2}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-primary">سارة إبراهيم</h2>
              <p className="text-muted-foreground mt-1">34 سنة</p>
            </div>
            <Badge variant="destructive" className="gap-2 py-2 px-4">
              <AlertTriangle className="h-4 w-4" />
              حساسية من البنسلين
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5" />
                  سجل الزيارات السابقة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {previousVisits.map((visit, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-semibold text-sm">{visit.date}</div>
                    <div className="text-sm text-muted-foreground">
                      التشخيص: {visit.diagnosis}
                    </div>
                    {index < previousVisits.length - 1 && (
                      <Separator className="mt-3" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">مستندات وتقارير</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {documents.map((doc, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start gap-3"
                  >
                    {doc.type === "lab" ? (
                      <FileText className="h-4 w-4" />
                    ) : (
                      <ImageIcon className="h-4 w-4" />
                    )}
                    <div className="text-right flex-1">
                      <div className="font-medium">{doc.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {doc.date}
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-xl">
                  تفاصيل الزيارة الحالية: 20 أكتوبر 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="font-semibold text-lg">الأعراض والشكوى:</label>
                  <Textarea
                    placeholder="صداع مستمر منذ يومين، مع ارتفاع طفيف في الحرارة..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-semibold text-lg">التشخيص:</label>
                  <Textarea
                    placeholder="إجهاد عام نتيجة عدوى فيروسية..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-semibold text-lg">ملاحظات الطبيب:</label>
                  <Textarea
                    placeholder="قياس الضغط والسكري ضمن المعدل الطبيعي..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-4">الإجراءات:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Button className="gap-2 h-auto py-3">
                      <FileEdit className="h-5 w-5" />
                      كتابة وصفة طبية
                    </Button>
                    <Button variant="secondary" className="gap-2 h-auto py-3">
                      <TestTube className="h-5 w-5" />
                      طلب تحاليل
                    </Button>
                    <Button variant="outline" className="gap-2 h-auto py-3">
                      <CalendarCheck className="h-5 w-5" />
                      حجز متابعة
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="lg" className="flex-1">
                    حفظ الزيارة
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    إلغاء
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientFile;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
            <Stethoscope className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            نظام إدارة العيادة الطبية
          </h1>
          <p className="text-xl text-muted-foreground">
            حل متكامل لإدارة عيادتك بكل سهولة وكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            className="cursor-pointer hover:shadow-medium transition-all hover:-translate-y-1"
            onClick={() => navigate("/reception")}
          >
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">موظف الاستقبال</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                إدارة المواعيد والمرضى والحجوزات
              </p>
              <Button className="w-full" size="lg">
                الدخول لواجهة الاستقبال
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-medium transition-all hover:-translate-y-1"
            onClick={() => navigate("/doctor")}
          >
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">الطبيب</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                متابعة المرضى وإدارة الكشوفات الطبية
              </p>
              <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                الدخول لواجهة الطبيب
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-accent/50 border-accent">
            <CardContent className="py-6">
              <div className="flex items-center justify-center gap-3 text-accent-foreground">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">
                  نظام شامل لإدارة المواعيد، الملفات الطبية، والتقارير
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;

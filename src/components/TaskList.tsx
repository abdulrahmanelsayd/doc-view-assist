import { CheckCircle2, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: 1, title: "مراجعة مواعيد الغد", completed: false },
  { id: 2, title: "تأكيد المواعيد مع المرضى", completed: true },
  { id: 3, title: "تحديث ملفات المرضى", completed: false },
  { id: 4, title: "إرسال التذكيرات", completed: false },
];

export const TaskList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">مهام اليوم</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {initialTasks.map((task) => (
          <Button
            key={task.id}
            variant="ghost"
            className="w-full justify-start gap-3 h-auto py-3"
          >
            {task.completed ? (
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            )}
            <span
              className={`text-right flex-1 ${
                task.completed ? "line-through text-muted-foreground" : ""
              }`}
            >
              {task.title}
            </span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

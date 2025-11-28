import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, BookOpen, Calendar, FileText, Award } from "lucide-react";

const Student = () => {
  const schedule = [
    { time: "08:00 - 09:00", subject: "Mathématiques", room: "Salle 201", teacher: "M. Dupont" },
    { time: "09:00 - 10:00", subject: "Français", room: "Salle 105", teacher: "Mme Martin" },
    { time: "10:00 - 11:00", subject: "Histoire", room: "Salle 302", teacher: "M. Bernard" },
  ];

  const grades = [
    { subject: "Mathématiques", grade: "15/20", average: "13.5/20" },
    { subject: "Français", grade: "16/20", average: "14.2/20" },
    { subject: "Histoire", grade: "14/20", average: "13.8/20" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Espace Étudiant</h1>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold">Jean Dupont</p>
                <p className="text-sm text-muted-foreground">6ème A</p>
              </div>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Moyenne Générale</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14.5/20</div>
              <p className="text-xs text-muted-foreground">+0.5 ce trimestre</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cours Aujourd'hui</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Cours programmés</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Devoirs À Rendre</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Cette semaine</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absences</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Ce trimestre</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Emploi du Temps - Aujourd'hui</CardTitle>
              <CardDescription>Mercredi 28 Novembre 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="shrink-0">
                      <p className="text-sm font-medium">{item.time}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.room} - {item.teacher}
                      </p>
                    </div>
                    <Badge variant="outline">Présentiel</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Grades */}
          <Card>
            <CardHeader>
              <CardTitle>Dernières Notes</CardTitle>
              <CardDescription>Résultats récents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {grades.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{item.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        Moyenne classe: {item.average}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-primary">{item.grade}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Student;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, BookOpen, Calendar, Bell } from "lucide-react";

const SchoolAdmin = () => {
  const classes = [
    { id: 1, name: "6ème A", students: 28, teacher: "M. Dupont" },
    { id: 2, name: "6ème B", students: 30, teacher: "Mme Martin" },
    { id: 3, name: "5ème A", students: 25, teacher: "M. Bernard" },
  ];

  const recentActivities = [
    { id: 1, type: "note", message: "Notes de mathématiques publiées - 6ème A", time: "Il y a 2h" },
    { id: 2, type: "absence", message: "3 absences signalées aujourd'hui", time: "Il y a 4h" },
    { id: 3, type: "event", message: "Réunion parents-profs programmée", time: "Il y a 1j" },
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
            <h1 className="text-2xl font-bold">Dashboard Admin d'École</h1>
            <Badge variant="outline">Lycée Victor Hugo</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Étudiants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">890</div>
              <p className="text-xs text-muted-foreground">Dans 32 classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enseignants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">Personnel actif</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cours Aujourd'hui</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Cours programmés</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Événements</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Ce mois-ci</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Classes List */}
          <Card>
            <CardHeader>
              <CardTitle>Classes</CardTitle>
              <CardDescription>Gestion des classes de l'établissement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classes.map((classe) => (
                  <div
                    key={classe.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold">{classe.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {classe.students} élèves - {classe.teacher}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Activités Récentes</CardTitle>
              <CardDescription>Dernières notifications et événements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-4 p-4 border rounded-lg">
                    <Bell className="h-5 w-5 text-primary shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
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

export default SchoolAdmin;

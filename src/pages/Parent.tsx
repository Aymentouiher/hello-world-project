import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, TrendingUp, Calendar, Bell, FileText } from "lucide-react";

const Parent = () => {
  const children = [
    { id: 1, name: "Jean Dupont", class: "6ème A", average: "14.5/20", status: "Bon" },
    { id: 2, name: "Marie Dupont", class: "4ème B", average: "15.8/20", status: "Excellent" },
  ];

  const notifications = [
    { 
      id: 1, 
      type: "note", 
      student: "Jean", 
      message: "Nouvelle note en Mathématiques: 15/20", 
      time: "Il y a 2h" 
    },
    { 
      id: 2, 
      type: "absence", 
      student: "Marie", 
      message: "Absence signalée ce matin", 
      time: "Il y a 5h" 
    },
    { 
      id: 3, 
      type: "event", 
      student: "Jean", 
      message: "Réunion parent-prof programmée le 05/12", 
      time: "Il y a 1j" 
    },
  ];

  const upcomingEvents = [
    { date: "05 Déc", title: "Réunion Parents-Profs", class: "6ème A" },
    { date: "12 Déc", title: "Sortie Scolaire", class: "4ème B" },
    { date: "18 Déc", title: "Spectacle de Noël", class: "Tous" },
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
            <h1 className="text-2xl font-bold">Espace Parent</h1>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold">M. & Mme Dupont</p>
                <p className="text-sm text-muted-foreground">2 enfants</p>
              </div>
              <Avatar>
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Children Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Mes Enfants</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {children.map((child) => (
              <Card key={child.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{child.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{child.name}</CardTitle>
                        <CardDescription>{child.class}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={child.status === "Excellent" ? "default" : "secondary"}>
                      {child.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Moyenne Générale</span>
                    <span className="text-2xl font-bold text-primary">{child.average}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileText className="h-4 w-4 mr-2" />
                      Notes
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Emploi du temps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Dernières actualités de vos enfants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notif) => (
                  <div key={notif.id} className="flex gap-4 p-4 border rounded-lg hover:bg-accent transition-colors">
                    <Bell className="h-5 w-5 text-primary shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {notif.student}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{notif.time}</span>
                      </div>
                      <p className="text-sm">{notif.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Événements À Venir</CardTitle>
              <CardDescription>Calendrier des activités scolaires</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="shrink-0 text-center">
                      <div className="text-2xl font-bold text-primary">
                        {event.date.split(' ')[0]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {event.date.split(' ')[1]}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.class}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Détails
                    </Button>
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

export default Parent;

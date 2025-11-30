import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Bell, Calendar, CreditCard, Check, FileText } from "lucide-react";

const Parent = () => {
  const children = [
    { id: 1, name: "Jean Dupont", class: "6ème A", average: "14.5/20", status: "À jour" },
    { id: 2, name: "Marie Dupont", class: "4ème B", average: "15.8/20", status: "À jour" },
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
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Espace Parent</h1>
              <p className="text-sm text-muted-foreground">M. & Mme Martin</p>
            </div>
            <Badge variant="secondary" className="px-4 py-2">2 Enfants</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="children" className="space-y-4">
          <TabsList>
            <TabsTrigger value="children">Mes Enfants</TabsTrigger>
            <TabsTrigger value="payments">
              <CreditCard className="h-4 w-4 mr-2" />
              Paiements
            </TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="children" className="space-y-6">
            {/* Children Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {children.map((child) => (
                <Card key={child.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                          {child.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <CardTitle>{child.name}</CardTitle>
                          <CardDescription>{child.class}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">{child.status}</Badge>
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
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Paiements Mensuels</CardTitle>
                <CardDescription>Gérez les frais de scolarité de vos enfants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {children.map((child) => (
                  <div key={child.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{child.name}</h4>
                        <p className="text-sm text-muted-foreground">{child.class}</p>
                      </div>
                      <Badge variant={child.status === "À jour" ? "default" : "destructive"}>
                        {child.status}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Frais mensuels</span>
                        <span className="font-semibold">450 €</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Dernier paiement</span>
                        <span>15 Mars 2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Prochain paiement</span>
                        <span className="font-medium text-primary">15 Avril 2024</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full mt-2">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Payer maintenant
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Paiement des Frais de Scolarité</DialogTitle>
                            <DialogDescription>
                              Paiement pour {child.name} - {child.class}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <div className="space-y-2">
                              <Label htmlFor={`amount-${child.id}`}>Montant</Label>
                              <Input id={`amount-${child.id}`} value="450 €" disabled />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`card-${child.id}`}>Numéro de carte</Label>
                              <Input id={`card-${child.id}`} placeholder="4242 4242 4242 4242" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`expiry-${child.id}`}>Expiration</Label>
                                <Input id={`expiry-${child.id}`} placeholder="MM/AA" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`cvc-${child.id}`}>CVC</Label>
                                <Input id={`cvc-${child.id}`} placeholder="123" />
                              </div>
                            </div>
                            <Button className="w-full">
                              <Check className="h-4 w-4 mr-2" />
                              Confirmer le Paiement
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historique des Paiements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "15 Mars 2024", amount: "900 €", status: "Payé" },
                    { date: "15 Février 2024", amount: "900 €", status: "Payé" },
                    { date: "15 Janvier 2024", amount: "900 €", status: "Payé" },
                  ].map((payment, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{payment.date}</p>
                        <p className="text-sm text-muted-foreground">{payment.amount}</p>
                      </div>
                      <Badge variant="secondary">
                        <Check className="h-3 w-3 mr-1" />
                        {payment.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
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

            {/* Events */}
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Parent;

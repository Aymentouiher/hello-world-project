import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Users, GraduationCap, BookOpen, Calendar, Plus, Edit, Trash2, UserPlus } from "lucide-react";

const SuperAdmin = () => {
  const teachers = [
    { id: 1, name: "Jean Dupont", subject: "Mathématiques", email: "j.dupont@ecole.fr", classes: 3 },
    { id: 2, name: "Marie Lambert", subject: "Français", email: "m.lambert@ecole.fr", classes: 4 },
    { id: 3, name: "Pierre Martin", subject: "Histoire", email: "p.martin@ecole.fr", classes: 2 },
  ];

  const students = [
    { id: 1, name: "Sophie Martin", class: "3ème A", email: "sophie.m@ecole.fr", average: 15.5 },
    { id: 2, name: "Lucas Bernard", class: "3ème A", email: "lucas.b@ecole.fr", average: 12.8 },
    { id: 3, name: "Emma Dubois", class: "4ème B", email: "emma.d@ecole.fr", average: 16.2 },
  ];

  const classes = [
    { id: 1, name: "3ème A", field: "Général", students: 28, teacher: "Jean Dupont" },
    { id: 2, name: "3ème B", field: "Général", students: 25, teacher: "Marie Lambert" },
    { id: 3, name: "4ème A", field: "Général", students: 30, teacher: "Pierre Martin" },
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
              <h1 className="text-2xl font-bold">Dashboard Admin École</h1>
              <Badge variant="secondary" className="mt-1">Lycée Victor Hugo</Badge>
            </div>
            <Badge className="px-4 py-2">Plan Professional</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Étudiants</CardTitle>
              <GraduationCap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">890</div>
              <p className="text-xs text-muted-foreground">+12% cette année</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Professeurs</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">Tous actifs</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes</CardTitle>
              <BookOpen className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">8 filières</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cours Aujourd'hui</CardTitle>
              <Calendar className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">En cours</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="teachers" className="space-y-4">
          <TabsList>
            <TabsTrigger value="teachers">Professeurs</TabsTrigger>
            <TabsTrigger value="students">Étudiants</TabsTrigger>
            <TabsTrigger value="classes">Classes & Filières</TabsTrigger>
            <TabsTrigger value="schedule">Emploi du Temps</TabsTrigger>
            <TabsTrigger value="absences">Absences</TabsTrigger>
          </TabsList>

          {/* Teachers Tab */}
          <TabsContent value="teachers" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Gestion des Professeurs</CardTitle>
                  <CardDescription>Ajouter, modifier ou supprimer des professeurs</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter un Prof
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouveau professeur</DialogTitle>
                      <DialogDescription>Remplissez les informations du professeur</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="teacher-name">Nom complet</Label>
                        <Input id="teacher-name" placeholder="Jean Dupont" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teacher-email">Email</Label>
                        <Input id="teacher-email" type="email" placeholder="jean.dupont@ecole.fr" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teacher-subject">Matière</Label>
                        <Select>
                          <SelectTrigger id="teacher-subject">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="math">Mathématiques</SelectItem>
                            <SelectItem value="french">Français</SelectItem>
                            <SelectItem value="history">Histoire</SelectItem>
                            <SelectItem value="english">Anglais</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teacher-phone">Téléphone</Label>
                        <Input id="teacher-phone" type="tel" placeholder="+33 6 12 34 56 78" />
                      </div>
                      <Button className="w-full">Ajouter le Professeur</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Matière</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Classes</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{teacher.subject}</Badge>
                        </TableCell>
                        <TableCell>{teacher.email}</TableCell>
                        <TableCell>{teacher.classes} classes</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Gestion des Étudiants</CardTitle>
                  <CardDescription>Ajouter, modifier ou supprimer des étudiants</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Ajouter un Étudiant
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouvel étudiant</DialogTitle>
                      <DialogDescription>Remplissez les informations de l'étudiant</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-name">Nom complet</Label>
                        <Input id="student-name" placeholder="Sophie Martin" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-email">Email</Label>
                        <Input id="student-email" type="email" placeholder="sophie.martin@ecole.fr" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-class">Classe</Label>
                        <Select>
                          <SelectTrigger id="student-class">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3a">3ème A</SelectItem>
                            <SelectItem value="3b">3ème B</SelectItem>
                            <SelectItem value="4a">4ème A</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-parent">Email Parent</Label>
                        <Input id="student-parent" type="email" placeholder="parent@email.fr" />
                      </div>
                      <Button className="w-full">Ajouter l'Étudiant</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Classe</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Moyenne</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>
                          <Badge>{student.class}</Badge>
                        </TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>
                          <Badge variant={student.average >= 15 ? "default" : student.average >= 10 ? "secondary" : "destructive"}>
                            {student.average}/20
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classes Tab */}
          <TabsContent value="classes" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Gestion des Classes</CardTitle>
                  <CardDescription>Gérer les classes et les filières</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Créer une Classe
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {classes.map((classe) => (
                    <Card key={classe.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {classe.name}
                          <Badge variant="outline">{classe.field}</Badge>
                        </CardTitle>
                        <CardDescription>{classe.teacher}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{classe.students} étudiants</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="h-4 w-4 mr-1" />
                            Modifier
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Emploi du Temps</CardTitle>
                <CardDescription>Créer et modifier les emplois du temps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Fonctionnalité de gestion d'emploi du temps</p>
                  <Button className="mt-4">Créer un Emploi du Temps</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Absences Tab */}
          <TabsContent value="absences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Absences</CardTitle>
                <CardDescription>Consulter et ajouter des absences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="absence-class">Classe</Label>
                      <Select>
                        <SelectTrigger id="absence-class">
                          <SelectValue placeholder="Toutes les classes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes</SelectItem>
                          <SelectItem value="3a">3ème A</SelectItem>
                          <SelectItem value="3b">3ème B</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="absence-date">Date</Label>
                      <Input id="absence-date" type="date" />
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full">Rechercher</Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-6 text-center text-muted-foreground">
                    <p>Sélectionnez une classe et une date pour voir les absences</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SuperAdmin;

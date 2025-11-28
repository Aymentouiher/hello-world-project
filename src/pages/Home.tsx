import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, UserCog, BookOpen, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">SchoolHub</span>
          </div>
          <nav className="flex gap-4">
            <Link to="/super-admin">
              <Button variant="ghost">Super Admin</Button>
            </Link>
            <Link to="/school-admin">
              <Button variant="ghost">Admin</Button>
            </Link>
            <Link to="/student">
              <Button variant="ghost">Étudiant</Button>
            </Link>
            <Link to="/parent">
              <Button variant="ghost">Parent</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Système de Gestion Scolaire
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Plateforme complète pour gérer votre établissement scolaire, les étudiants, 
          les enseignants et les parents en un seul endroit.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/student">
            <Button size="lg" className="hover-scale">Espace Étudiant</Button>
          </Link>
          <Link to="/parent">
            <Button size="lg" variant="outline" className="hover-scale">Espace Parent</Button>
          </Link>
        </div>
      </section>

      {/* Pricing Section for Schools */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Formules d'Abonnement</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre établissement scolaire
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl">Basique</CardTitle>
                <CardDescription>Pour les petites écoles</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">29€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Jusqu'à 200 étudiants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Gestion des notes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Emploi du temps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Support email</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Choisir Basique
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-primary shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Populaire</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professionnel</CardTitle>
                <CardDescription>Pour les établissements moyens</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">79€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Jusqu'à 1000 étudiants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Tout du plan Basique</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Messagerie intégrée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Rapports avancés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Support prioritaire</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Choisir Professionnel
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl">Entreprise</CardTitle>
                <CardDescription>Pour les grandes institutions</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">199€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Étudiants illimités</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Tout du plan Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">API personnalisée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Hébergement dédié</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Support 24/7</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Nous Contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Accès Rapide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/super-admin" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <UserCog className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Super Admin</CardTitle>
                <CardDescription>
                  Gérer tous les établissements et administrateurs
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/school-admin" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Admin d'École</CardTitle>
                <CardDescription>
                  Gérer votre établissement, enseignants et étudiants
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/student" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Espace Étudiant</CardTitle>
                <CardDescription>
                  Accéder aux cours, notes et emploi du temps
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/parent" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Espace Parent</CardTitle>
                <CardDescription>
                  Suivre la scolarité de vos enfants
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 SchoolHub - Système de Gestion Scolaire</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

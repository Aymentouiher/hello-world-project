import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <h1 className="text-5xl font-bold mb-6">
          Système de Gestion Scolaire
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Plateforme complète pour gérer votre établissement scolaire, les étudiants, 
          les enseignants et les parents en un seul endroit.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/student">
            <Button size="lg">Espace Étudiant</Button>
          </Link>
          <Link to="/parent">
            <Button size="lg" variant="outline">Espace Parent</Button>
          </Link>
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

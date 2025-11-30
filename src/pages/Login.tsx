import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (role: string) => {
    // Simulation de connexion - sera remplacé par l'authentification réelle
    switch (role) {
      case "admin":
        navigate("/super-admin");
        break;
      case "prof":
        navigate("/school-admin");
        break;
      case "student":
        navigate("/student");
        break;
      case "parent":
        navigate("/parent");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8" />
            SchoolHub
          </Link>
          <p className="text-muted-foreground mt-2">Connectez-vous à votre espace</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Connexion</CardTitle>
            <CardDescription>Choisissez votre profil et connectez-vous</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="admin" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="admin">Admin</TabsTrigger>
                <TabsTrigger value="prof">Prof</TabsTrigger>
                <TabsTrigger value="student">Étudiant</TabsTrigger>
                <TabsTrigger value="parent">Parent</TabsTrigger>
              </TabsList>

              <TabsContent value="admin" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="admin@ecole.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Mot de passe</Label>
                  <Input
                    id="admin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={() => handleLogin("admin")}>
                  Se connecter en tant qu'Admin
                </Button>
              </TabsContent>

              <TabsContent value="prof" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="prof-email">Email</Label>
                  <Input
                    id="prof-email"
                    type="email"
                    placeholder="prof@ecole.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prof-password">Mot de passe</Label>
                  <Input
                    id="prof-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={() => handleLogin("prof")}>
                  Se connecter en tant que Prof
                </Button>
              </TabsContent>

              <TabsContent value="student" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Email</Label>
                  <Input
                    id="student-email"
                    type="email"
                    placeholder="etudiant@ecole.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Mot de passe</Label>
                  <Input
                    id="student-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={() => handleLogin("student")}>
                  Se connecter en tant qu'Étudiant
                </Button>
              </TabsContent>

              <TabsContent value="parent" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="parent-email">Email</Label>
                  <Input
                    id="parent-email"
                    type="email"
                    placeholder="parent@email.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parent-password">Mot de passe</Label>
                  <Input
                    id="parent-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={() => handleLogin("parent")}>
                  Se connecter en tant que Parent
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Retour à l'accueil
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;

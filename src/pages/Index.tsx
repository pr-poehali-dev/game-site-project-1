import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-neon-green" size={32} />
              <h1 className="text-2xl font-orbitron font-bold text-neon-green neon-text">GAMING HUB</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-foreground hover:text-neon-green">
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-neon-green">
                Игры
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-neon-green">
                Достижения
              </Button>
              <Button className="bg-neon-green text-cyber-dark hover:bg-neon-green/80 font-semibold">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 cyber-grid">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink">
                  🏆 Новый рекорд
                </Badge>
                <h1 className="text-5xl font-orbitron font-black text-transparent bg-gradient-to-r from-neon-green to-neon-pink bg-clip-text animate-neon-pulse">
                  ПОДНИМИСЬ НА ВЕРШИНУ
                </h1>
                <p className="text-xl text-muted-foreground">
                  Присоединяйся к элитному сообществу геймеров. Соревнуйся, побеждай и зарабатывай эпические достижения.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-neon-green text-cyber-dark hover:bg-neon-green/80 text-lg px-8 py-3 animate-glow">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать игру
                </Button>
                <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 text-lg px-8 py-3">
                  <Icon name="Trophy" className="mr-2" size={20} />
                  Рейтинг
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-green">1.2K</div>
                  <div className="text-sm text-muted-foreground">Активных игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-pink">89</div>
                  <div className="text-sm text-muted-foreground">Доступных игр</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-blue">24/7</div>
                  <div className="text-sm text-muted-foreground">Онлайн поддержка</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/ce4bf472-f5f3-41b2-bae5-12cb0cf203be.jpg" 
                alt="Gaming Character" 
                className="rounded-lg border border-neon-green/30 shadow-2xl shadow-neon-green/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 bg-cyber-gray/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-neon-green">
              Популярные игры
            </h2>
            <p className="text-muted-foreground">Самые горячие баталии ждут тебя</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Cyber Warriors", players: "2.1K", rating: 4.8, status: "LIVE" },
              { name: "Neon Racing", players: "1.5K", rating: 4.6, status: "HOT" },
              { name: "Space Conquest", players: "890", rating: 4.9, status: "NEW" }
            ].map((game, index) => (
              <Card key={index} className="bg-cyber-light border-border/30 hover:border-neon-green/50 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-orbitron text-foreground group-hover:text-neon-green transition-colors">
                      {game.name}
                    </CardTitle>
                    <Badge className={`${
                      game.status === 'LIVE' ? 'bg-neon-green/20 text-neon-green' :
                      game.status === 'HOT' ? 'bg-neon-pink/20 text-neon-pink' :
                      'bg-neon-blue/20 text-neon-blue'
                    }`}>
                      {game.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src="/img/78c21318-4a62-475d-8aa2-64caa00b0a33.jpg" 
                    alt={game.name}
                    className="w-full h-32 object-cover rounded border border-border/30"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{game.players} игроков</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-neon-green fill-current" />
                      <span className="text-sm font-semibold">{game.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-neon-green/10 text-neon-green border border-neon-green/30 hover:bg-neon-green hover:text-cyber-dark">
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Genres */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-neon-blue">
              Жанры игр
            </h2>
            <p className="text-muted-foreground">Выбери свой стиль игры</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Шутеры", 
                icon: "Target", 
                count: "23 игры", 
                color: "neon-pink",
                description: "FPS и TPS экшн"
              },
              { 
                name: "Стратегии", 
                icon: "Brain", 
                count: "18 игр", 
                color: "neon-green",
                description: "RTS и пошаговые"
              },
              { 
                name: "RPG", 
                icon: "Sword", 
                count: "31 игра", 
                color: "neon-blue",
                description: "Ролевые приключения"
              },
              { 
                name: "Гонки", 
                icon: "Car", 
                count: "17 игр", 
                color: "neon-purple",
                description: "Скорость и адреналин"
              }
            ].map((genre, index) => (
              <Card key={index} className={`bg-cyber-light border-${genre.color}/30 hover:border-${genre.color} transition-all duration-300 group cursor-pointer hover:scale-105`}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-${genre.color}/20 flex items-center justify-center border-2 border-${genre.color} group-hover:animate-pulse`}>
                    <Icon name={genre.icon as any} className={`text-${genre.color}`} size={28} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-orbitron font-bold text-${genre.color} mb-1`}>
                      {genre.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{genre.description}</p>
                    <Badge className={`bg-${genre.color}/20 text-${genre.color} border-${genre.color}/30`}>
                      {genre.count}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
              <Icon name="Grid3X3" className="mr-2" size={20} />
              Посмотреть все жанры
            </Button>
          </div>
        </div>
      </section>

      {/* Game Years */}
      <section className="py-16 bg-cyber-gray/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-neon-purple">
              Игры по годам
            </h2>
            <p className="text-muted-foreground">От классики до новинок</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { year: "2024", count: "12", status: "NEW", color: "neon-green" },
              { year: "2023", count: "28", status: "HOT", color: "neon-pink" },
              { year: "2022", count: "35", status: "", color: "neon-blue" },
              { year: "2021", count: "24", status: "", color: "neon-purple" },
              { year: "2020", count: "19", status: "", color: "neon-green" },
              { year: "Классика", count: "45", status: "RETRO", color: "neon-pink" }
            ].map((yearData, index) => (
              <Card key={index} className={`bg-cyber-light border-${yearData.color}/30 hover:border-${yearData.color} transition-all duration-300 group cursor-pointer hover:scale-105`}>
                <CardContent className="p-4 text-center space-y-3">
                  {yearData.status && (
                    <Badge className={`text-xs ${
                      yearData.status === 'NEW' ? 'bg-neon-green/20 text-neon-green' :
                      yearData.status === 'HOT' ? 'bg-neon-pink/20 text-neon-pink' :
                      'bg-neon-purple/20 text-neon-purple'
                    }`}>
                      {yearData.status}
                    </Badge>
                  )}
                  <div>
                    <h3 className={`text-xl font-orbitron font-bold text-${yearData.color} mb-1`}>
                      {yearData.year}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {yearData.count} игр
                    </p>
                  </div>
                  <div className={`w-full h-1 bg-${yearData.color}/20 rounded-full overflow-hidden`}>
                    <div className={`h-full bg-${yearData.color} rounded-full transition-all duration-300 group-hover:animate-pulse`} 
                         style={{width: `${Math.min(parseInt(yearData.count) * 2, 100)}%`}} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-6 bg-cyber-light rounded-full px-8 py-4 border border-border/30">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-sm text-neon-green font-orbitron">2024: Новинки</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse"></div>
                <span className="text-sm text-neon-pink font-orbitron">2023: Хиты года</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
                <span className="text-sm text-neon-purple font-orbitron">Ретро классика</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements System */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-neon-pink">
              Система достижений
            </h2>
            <p className="text-muted-foreground">Прокачивай навыки и получай эпические награды</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-cyber-light border-neon-green/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/img/9cf5c28b-06c4-41ff-94fe-6998f9e59cfd.jpg" 
                      alt="Achievement"
                      className="w-12 h-12 rounded-full border-2 border-neon-green"
                    />
                    <div>
                      <CardTitle className="text-lg font-orbitron text-neon-green">Мастер игры</CardTitle>
                      <p className="text-sm text-muted-foreground">Выиграй 100 матчей подряд</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span className="text-neon-green">78/100</span>
                    </div>
                    <Progress value={78} className="h-2 bg-cyber-gray">
                      <div className="h-full bg-gradient-to-r from-neon-green to-neon-pink rounded-full transition-all" />
                    </Progress>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyber-light border-neon-pink/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center border-2 border-neon-pink">
                      <Icon name="Zap" className="text-neon-pink" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-orbitron text-neon-pink">Скоростной бегун</CardTitle>
                      <p className="text-sm text-muted-foreground">Пройди уровень за 30 секунд</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Лучшее время</span>
                      <span className="text-neon-pink">32.5 сек</span>
                    </div>
                    <Progress value={92} className="h-2 bg-cyber-gray">
                      <div className="h-full bg-neon-pink rounded-full transition-all" />
                    </Progress>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyber-light border-neon-blue/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center border-2 border-neon-blue">
                      <Icon name="Shield" className="text-neon-blue" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-orbitron text-neon-blue">Несокрушимый</CardTitle>
                      <p className="text-sm text-muted-foreground">Выживи 10 минут без урона</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-neon-blue/20 text-neon-blue">
                    ✓ Получено!
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-br from-cyber-light to-cyber-gray rounded-lg border border-neon-green/30">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neon-green/20 flex items-center justify-center border-4 border-neon-green animate-pulse">
                  <Icon name="Trophy" className="text-neon-green" size={32} />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-neon-green mb-2">Уровень 47</h3>
                <p className="text-muted-foreground mb-4">До следующего уровня</p>
                <Progress value={73} className="h-3 bg-cyber-gray mb-2">
                  <div className="h-full bg-gradient-to-r from-neon-green to-neon-pink rounded-full transition-all" />
                </Progress>
                <p className="text-sm text-muted-foreground">7,300 / 10,000 XP</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-cyber-light rounded-lg border border-border/30">
                  <Icon name="Target" className="text-neon-pink mx-auto mb-2" size={24} />
                  <div className="text-lg font-orbitron font-bold text-neon-pink">89%</div>
                  <div className="text-xs text-muted-foreground">Точность</div>
                </div>
                <div className="text-center p-4 bg-cyber-light rounded-lg border border-border/30">
                  <Icon name="Clock" className="text-neon-blue mx-auto mb-2" size={24} />
                  <div className="text-lg font-orbitron font-bold text-neon-blue">156h</div>
                  <div className="text-xs text-muted-foreground">Время игры</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-cyber-gray/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-neon-green" size={24} />
              <span className="font-orbitron font-bold text-neon-green">GAMING HUB</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Gaming Hub. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
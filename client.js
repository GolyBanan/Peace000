// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "Teams/Red", { r: 1 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "Teams/Blue", { b: 1 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = false;
		Teams.Get("Blue").Inventory.Secondary.Value = false;
		Teams.Get("Blue").Inventory.Melee.Value = false;
		Teams.Get("Blue").Inventory.Explosive.Value = false;
		Teams.Get("Blue").Inventory.Build.Value = false;
	}
}

// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = true;
inventory.Explosive.Value = false;
inventory.Build.Value = true;
inventory.BuildInfinity.Value = true;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;

// ????????? ???? ? ??????? ?? ???????   
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);     
  
if (player.id  == "51F1AB487954C59C" || player.id == "EB52F9F7AA489D6E" || player.id == "1884722D6A387FE3"){  
player.inventory.MainInfinity.Value = true;   
player.inventory.Main.Value = true;   
player.inventory.Melee.Value = true;   
player.inventory.Explosive.Value = true;   
player.inventory.Build.Value = true;   
player.inventory.BuildInfinity.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Secondary.Value = true;  
player.Build.FloodFill.Value = true;   
player.Build.FillQuad.Value = true;   
player.Build.RemoveQuad.Value = true;   
player.Build.BalkLenChange.Value = true;   
player.Build.FlyEnable.Value = true;   
player.Build.SetSkyEnable.Value = true; 
 
player.Build.GenMapEnable.Value = true; 
player.Build.ChangeCameraPointsEnable.Value = true;   
player.Build.QuadChangeEnable.Value = true;   
player.Build.BuildModeEnable.Value = true;   
player.Build.CollapseChangeEnable.Value = true;   
player.Build.RenameMapEnable.Value = true;

player.Build.ChangeMapAuthorsEnable.Value = true;   
player.Build.LoadMapEnable.Value = true;   
player.Build.ChangeSpawnsEnable.Value = true;   
player.Build.BuildRangeEnable.Value = true; 
Damage.GetContext(player).DamageIn.Value=false;
Damage.GetContext(player).FriendlyFire.Value=true;
Damage.GetContext(player).DamageOut.Value = true;


var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger");  
  
adminTrigger.Tags = ["AdminTrigger"];   
adminTrigger.Enable = true;   
adminTrigger.OnEnter.Add(function(player) {   
 player.inventory.Main.Value = true;   
 player.inventory.MainInfinity.Value = true;   
 player.inventory.Secondary.Value = true;    
 player.inventory.SecondaryInfinity.Value = true;   
 player.inventory.Melee.Value = true;   
 player.inventory.Explosive.Value = true;   
 player.inventory.ExplosiveInfinity.Value = true;   
 player.inventory.Build.Value = true;   
 player.inventory.BuildInfinity.Value = true;   
 player.Build.FlyEnable.Value = true;   
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ";  
  
var lolTrigger =  AreaPlayerTriggerService.Get("LOLTrigger")   
   
lolTrigger.Tags = [LOLAreasTag];   
lolTrigger.Enable = true;   
lolTrigger.OnEnter.Add(function (player)  { 
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВСЕ БЛОКИ=)";
player.Properties.Immortality.Value = false;   
Spawns.GetContext().enable = true;   
lolTrigger.Enable = true;   
Player.inventory.Build.Value = true;   
Player.inventory.BuildInfinity.Value = true;   
Player.inventory.Build.BlocksSet.Value = true;   
lolTrigger.Enable = true;   
});  
});   
 }   
});   
var nTrigger =  AreaPlayerTriggerService.Get("nTrigger");

nTrigger.Tags = ["baan"];
nTrigger.Enable = true;
nTrigger.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "BAN";
Spawns.GetContext(player).RespawnTime.Value = Infinity;});

var nmTrigger =  AreaPlayerTriggerService.Get("nmTrigger");

nmTrigger.Tags = ["antiban"];
nmTrigger.Enable = true;
nmTrigger.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "BAN убран";
Spawns.GetContext(player).RespawnTime.Value = 0;});

var bessTrigger =  AreaPlayerTriggerService.Get("bessTrigger");

bessTrigger.Tags = ["bess"];
bessTrigger.Enable = true;
bessTrigger.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "Ты получил бессмертие";
Damage.GetContext(player).DamageIn.Value=false;
});

var etrigger =  AreaPlayerTriggerService.Get("etrigger");  

etrigger.Tags = ["et"];  
etrigger.Enable = true;  
etrigger.OnEnter.Add(function(player) { 
 if (player.Properties.Kills.Value > 40)  
{ 
player.Ui.Hint.Value = "ты приобрёл бесмертие! ";  
Damage.GetContext(player).DamageIn.Value=false 
}else{player.Ui.Hint.Value = "Что бы приобрести бесмертие надо 40 киллов";} 
});

var pistTrigger =  AreaPlayerTriggerService.Get("pistTrigger");

pistTrigger.Tags = ["pist"];
pistTrigger.Enable = true;
pistTrigger.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "Ты получил пистолет";
player.inventory.Secondary.Value = true;
});

var baAreaTag = "Bann";
var ViewbaParameterName = "Vivewba";
var baAreas = AreaService.GetByTag(baAreaTag);
var baView = AreaViewService.GetContext().Get("baView");
baView.Color = {g:1};
baView.Tags = [baAreaTag];
baView.Enable = true;
var baTrigger = AreaPlayerTriggerService.Get("baTrigger");
baTrigger.Tags = [baAreaTag];
baTrigger.Enable = true;
baTrigger.OnEnter.Add(function (player) {
player.inventory.Main.Value = false;
player.inventory.Secondary.Value = false;
player.inventory.Melee.Value = false;
player.inventory.Explosive.Value = false;
player.inventory.Build.Value = false;
player.inventory.MainInfinity.Value = 
player.inventory.SecondaryInfinity.Value = false;
player.inventory.ExplosiveInfinity.Value = false;
player.inventory.BuildInfinity.Value = false;
player.Ui.Hint.Value ="ты получил БАН"
player.Build.Pipette.Value = false;
player.Build.FloodFill.Value = false;
player.Build.FillQuad.Value = false;
player.Build.RemoveQuad.Value = false;
player.Build.BalkLenChange.Value = false;
player.Build.FlyEnable.Value = false;
player.Build.SetSkyEnable.Value = false;
player.Build.GenMapEnable.Value = false;
player.Build.ChangeCameraPointsEnable.Value = false;
player.Build.QuadChangeEnable.Value = false;
player.Build.BuildModeEnable.Value = false;
player.Build.CollapseChangeEnable.Value = false;
player.Build.RenameMapEnable.Value = false;
player.Build.ChangeMapAuthorsEnable.Value = false;
player.Build.LoadMapEnable.Value = false;
player.Build.ChangeSpawnsEnable.Value = false;
player.Build.BuildRangeEnable.Value = false;
});

var kkopTrigger =  AreaPlayerTriggerService.Get("kkopTrigger");

kkopTrigger.Tags = ["kop"];
kkopTrigger.Enable = true;
kkopTrigger.OnEnter.Add(function (player) {
	player.inventory.Main.Value = true;   
 player.inventory.MainInfinity.Value = true;   
 player.inventory.Secondary.Value = true;    
 player.inventory.SecondaryInfinity.Value = true;   
 player.inventory.Melee.Value = true;   
 player.inventory.Explosive.Value = true;   
 player.inventory.ExplosiveInfinity.Value = true;   
 player.inventory.Build.Value = true;   
 player.inventory.BuildInfinity.Value = true;   
player.Ui.Hint.Value = "Ты получил оружку; пистик; хол.оруж; блок с беск. патронами";  
});

var flyTrigger =  AreaPlayerTriggerService.Get("flyTrigger");

flyTrigger.Tags = ["fly"];
flyTrigger.Enable = true;
flyTrigger.OnEnter.Add(function (player) {
	player.Build.FlyEnable.Value=true;
	playerUi.Hint.Value="Ты получил флай(полет)";
});

var lobTrigger =  AreaPlayerTriggerService.Get("lobTrigger");

lobTrigger.Tags = ["lob"];
lobTrigger.Enable = true;
lobTrigger.OnEnter.Add(function (player) {
	player.inventory.Melee.Value = true; 
	player.inventory.Build.Value = true; 
	player.Ui.Hint.Value="Ты получил Лопату и Блоки";
	});
	var updTrg = AreaPlayerTriggerService.Get("UpdTrigger"); 
updTrg.Tags = ["upd"]; 
updTrg.Enable = true; 
updTrg.OnEnter.Add(function(){ 
list = []; 
curenc = 0; 
ato = 0; 
var e = Players.GetEnumerator(); 
while(e.moveNext()){ 
list.push(e.Current); 
} 
}); 

var choseTrg = AreaPlayerTriggerService.Get("ChoseTrigger"); 
choseTrg.Tags = ["chose"]; 
choseTrg.Enable = true; 
choseTrg.OnEnter.Add(function(p){ 
ato = list[curenc]; 
p.Ui.Hint.Value="> "+ato; 
if(curenc < (list.length - 1))curenc++; 
else curenc = 0; 
}); 

var banTrg = AreaPlayerTriggerService.Get("BanTrigger") 
banTrg.Tags = ["ban"]; 
banTrg.Enable = true; 
banTrg.OnEnter.Add(function(p){ 
Ban(ato); 
p.Ui.Hint.Value=ato+" не бушуй "; 
function Ban(player){ 
p=player 
p.Spawns.Spawn(); 
p.Spawns.Despawn(); 
p.Build.BuildRangeEnable.Value=false; 
p.Ui.Hint.Value="you are banned"; 
} 
});

var ffTrigger= AreaPlayerTriggerService.Get("ffTrigger") 
ffTrigger.Tags = ["ff"]; 
ffTrigger.Enable = true; 
ffTrigger.OnEnter.Add(function(player){ 
	Damage.GetContext(player).FriendlyFire.Value=true;
	player.Ui.Hint.Vlaue="Можешь убивать по своим";
	});
	
var ffdTrigger= AreaPlayerTriggerService.Get("ffdTrigger") 
ffdTrigger.Tags = ["ffd"]; 
ffdTrigger.Enable = true; 
ffdTrigger.OnEnter.Add(function(player){ 
	Damage.GetContext(player).FriendlyFire.Value=true;
	Damage.GetContext(player).DamageOut.Value =true;
	player.Ui.Hint.Vlaue="Тебе доступен урон по врагам и по своим";
	});
	
var damTrigger= AreaPlayerTriggerService.Get("damTrigger") 
damTrigger.Tags = ["dam"]; 
damTrigger.Enable = true; 
damTrigger.OnEnter.Add(function(player){ 
	Damage.GetContext().DamageOut.Value =
	player.Ui.Hint.Vlaue = "Тебе доступен урон по противникам";
	});
	
var ofbesTrigger= AreaPlayerTriggerService.Get("ofbesTrigger") 
ofbesTrigger.Tags = ["ofbes"]; 
ofbesTrigger.Enable = true; 
ofbesTrigger.OnEnter.Add(function(player){ 
	Damage.GetContext(player).DamageIn.Value=true;
	player.Ui.Hint.Vlaue = "Теперь ты убиваемый";
	});
	
var SaTrigger= AreaPlayerTriggerService.Get("SaTrigger") 
SaTrigger.Tags = ["supadm"]; 
SaTrigger.Enable = true; 
SaTrigger.OnEnter.Add(function(player){ 
	player.inventory.MainInfinity.Value = true;   
player.inventory.Main.Value = true;   
player.inventory.Melee.Value = true;   
player.inventory.Explosive.Value = true;   
player.inventory.Build.Value = true;   
player.inventory.BuildInfinity.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Secondary.Value = true;  
player.Build.FloodFill.Value = true;   
player.Build.FillQuad.Value = true;   
player.Build.RemoveQuad.Value = true;   
player.Build.BalkLenChange.Value = true;   
player.Build.FlyEnable.Value = true;   
player.Build.SetSkyEnable.Value = true; 
 
player.Build.GenMapEnable.Value = true; 
player.Build.ChangeCameraPointsEnable.Value = true;   
player.Build.QuadChangeEnable.Value = true;   
player.Build.BuildModeEnable.Value = true;   
player.Build.CollapseChangeEnable.Value = true;   
player.Build.RenameMapEnable.Value = true;

player.Build.ChangeMapAuthorsEnable.Value = true;   
player.Build.LoadMapEnable.Value = true;   
player.Build.ChangeSpawnsEnable.Value = true;   
player.Build.BuildRangeEnable.Value = true; 
Damage.GetContext(player).DamageIn.Value=false;
Damage.GetContext(player).FriendlyFire.Value=true;
Damage.GetContext(player).DamageOut.Value = true;
	player.Ui.Hint.Vlaue = "ТЫ СУПЕР АДМИН";
	});
	
var zekTrigger= AreaPlayerTriggerService.Get("zekTrigger") 
zekTrigger.Tags = ["zek"]; 
zekTrigger.Enable = true; 
zekTrigger.OnEnter.Add(function(player){ 
	contextedProperties.GetContext(player).SkinType.Value = 2;
	player.Ui.Hint.Value="Ты получил скин Зека";
	});
	
var zomTrigger= AreaPlayerTriggerService.Get("zomTrigger") 
zomTrigger.Tags = ["zom"]; 
zomTrigger.Enable = true; 
zomTrigger.OnEnter.Add(function(player){ 
	contextedProperties.GetContext(player).SkinType.Value = 1;
	player.Ui.Hint.Value="Ты получил скин Зомби";
	});
	
var blevTrigger= AreaPlayerTriggerService.Get("blevTrigger") 
blevTrigger.Tags = ["blev"]; 
blevTrigger.Enable = true; 
blevTrigger.OnEnter.Add(function(player){ 
	contextedProperties.GetContext().InventoryType.Value = 1;
     player.Ui.Hint.Value="Ты получил блевок Зомби";
	});

var skTrigger= AreaPlayerTriggerService.Get("skTrigger") 
skTrigger.Tags = ["sk"]; 
skTrigger.Enable = true; 
skTrigger.OnEnter.Add(function(player){ 
	contextedProperties.GetContext(player).SkinType.Value = 0;
	player.Ui.Hint.Value="Ты получил обычный скин";
	});
	
var bloTrigger= AreaPlayerTriggerService.Get("bloTrigger") 
bloTrigger.Tags = ["blo"]; 
bloTrigger.Enable = true; 
bloTrigger.OnEnter.Add(function(player){ 
	player.inventory.Build.Value=true;
	player.Ui.Hint.Value="Ты получил блоки";
	});
	
var ibloTrigger= AreaPlayerTriggerService.Get("ibloTrigger") 
ibloTrigger.Tags = ["iblo"]; 
ibloTrigger.Enable = true; 
ibloTrigger.OnEnter.Add(function(player){ 
	player.inventory.BuildInfinity.Value=true;
	player.Ui.Hint.Value="Бесконечные блоки";
	});
	
var t1trigger = AreaPlayerTriggerService.Get("t1trigger");
t1trigger.Tags = ["t1"];
t1trigger.Enable = true;
t1trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание выкл для всех•";
BreackGraph.OnlyPlayerBlocksDmg = true;
});
 var t2trigger = AreaPlayerTriggerService.Get("t2trigger");
t2trigger.Tags = ["t2"];
t2trigger.Enable = true;
t2trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание вкл для всех•";
BreackGraph.OnlyPlayerBlocksDmg = false;
});

var swview = AreaViewService.GetContext().Get("sqView");
var Srop = Properties.GetContext();
var swt = AreaPlayerTriggerService.Get("swtTrigger");
swview.Color = { g: 1 };
swview.Enable = true;
swview.Tags = ["s"];
swt.Tags = ["s"];
swt.Enable = true;
swt.OnEnter.Add(function(player){
  var prop = player.Properties.Get('list').Value;
if(prop < 2){
player.Properties.Get('list').Value++;
} else {
player.Properties.Get('list').Value = 1;
}
if(prop == 1){
  Srop.Get("door").Value = 1;
player.Ui.Hint.Value = "закрыто";
} else if(prop == 2){
player.Ui.Hint.Value = "открыто";
  Srop.Get("door").Value = 2;
    }
});

var swview = AreaViewService.GetContext().Get("sqView");
var Srop = Properties.GetContext();
var swt = AreaPlayerTriggerService.Get("swtTrigger");
swview.Color = { g: 1 };
swview.Enable = true;
swview.Tags = ["s"];
swt.Tags = ["s"];
swt.Enable = true;
swt.OnEnter.Add(function(player){
  var prop = player.Properties.Get('list').Value;
if(prop < 2){
player.Properties.Get('list').Value++;
} else {
player.Properties.Get('list').Value = 1;
}
if(prop == 1){
  Srop.Get("door").Value = 1;
player.Ui.Hint.Value = "закрыто";
} else if(prop == 2){
player.Ui.Hint.Value = "открыто";
  Srop.Get("door").Value = 2;
    }
});

var LeDo = AreaPlayerTriggerService.Get("LeDoTrigger");
var LeDoV = AreaViewService.GetContext().Get("dview");
LeDoV.Color = { r: 80, b: 80 };
LeDoV.Enable = true;
LeDoV.Tags = ["g"];
LeDo.Tags = ["g"];
LeDo.Enable = true;
LeDo.OnEnter.Add(function(player){
  if(Srop.Get("door").Value == 1){
} else if(Srop.Get("door").Value == 2){
  player.Spawns.Spawn();
   }
});
LeDo.OnEnter.Add(function(player){
  if(Srop.Get("door").Value == 2){
  player.Spawns.Spawn();
   }
});

// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
 Value: "Deaths",
 DisplayName: "Смертей",
 ShortDisplayName: "Смертей"
 }
];

// счётчик киллов
Damage.OnKill.Add(function(player, killed){ 
  if (killed.Team != null && killed.blueTeam == player.blueTeam) {
   ++player.Properties.Kills.Value;
  }
});

// счётчик смертей
Damage.OnDeath.Add(function(player){
 player.Properties.Deaths.Value++;
});

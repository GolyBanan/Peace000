import * as room from 'pixel_combats/room';
import * as teams from './default_teams.js';

// разрешает все что можно для строительства
function set_inventory() {
    const context = room.Inventory.GetContext();
    context.Main.Value = false;
    context.Secondary.Value = false;
    context.Melee.Value = true;
    context.Explosive.Value = false;
    context.Build.Value = true;
    context.BuildInfinity.Value = true;
}

function set_build_settings() {
    const context = room.Build.GetContext();
    // прочие опции
    context.Pipette.Value = true;
    context.BalkLenChange.Value = true;
    context.SetSkyEnable.Value = true;
    context.GenMapEnable.Value = true;
    context.ChangeCameraPointsEnable.Value = true;
    context.QuadChangeEnable.Value = true;
    context.BuildModeEnable.Value = true;
    context.CollapseChangeEnable.Value = true;
    context.RenameMapEnable.Value = true;
    context.ChangeMapAuthorsEnable.Value = true;
    context.LoadMapEnable.Value = true;
    context.ChangeSpawnsEnable.Value = true;
    context.BlocksSet.Value = room.BuildBlocksSet.AllClear; // делаем возможность строительства всеми блоками
}

// задает в контекст инвентаря пустой инвентарь
function set_empty_inventory(inventory) {
    inventory.Main.Value = false;
    inventory.Secondary.Value = false;
    inventory.Melee.Value = false;
    inventory.Explosive.Value = false;
    inventory.Build.Value = false;
}

// задает опции режима мир, выбранные при создании комнаты
export function apply_room_options() {
    const gameModeParameters = room.GameMode.Parameters;

    // опции строительства
    const buildContext = room.Build.GetContext();
    buildContext.FloodFill.Value = gameModeParameters.GetBool("FloodFill");
    buildContext.FillQuad.Value = gameModeParameters.GetBool("FillQuad");
    buildContext.RemoveQuad.Value = gameModeParameters.GetBool("RemoveQuad");
    buildContext.FlyEnable.Value = gameModeParameters.GetBool("Fly");

    // прочие опции
    room.Damage.GetContext().DamageOut.Value = gameModeParameters.GetBool("Damage");
    room.BreackGraph.OnlyPlayerBlocksDmg = gameModeParameters.GetBool("PartialDesruction");
    room.BreackGraph.WeakBlocks = gameModeParameters.GetBool("LoosenBlocks");
}

// задает настройки режима мир
export function configure() {
    room.Properties.GetContext().GameModeName.Value = "GameModes/Peace";// задаем название режима
    room.Ui.GetContext().Hint.Value = "Hint/BuildBase";// выводим подсказку
    room.Ui.GetContext().QuadsCount.Value = true;// выводим количество квадов на карте
    room.BreackGraph.BreackAll = true; // делаем так, чтобы можно было сломать любой блок
    room.Spawns.GetContext().RespawnTime.Value = 0; // убираем таймер респавна
    set_build_settings();
    set_inventory();
    apply_room_options();
}
//админка
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
}

export function create_teams() {
    // создаем команды
    const roomParameters = room.GameMode.Parameters;
    const hasRedTeam = roomParameters.GetBool("RedTeam");
    const hasBlueTeam = roomParameters.GetBool("BlueTeam");
    if (hasRedTeam || !hasRedTeam && !hasBlueTeam) {
        teams.create_team_red();
    }
    if (hasBlueTeam || !hasRedTeam && !hasBlueTeam) {
        const blueTeam = teams.create_team_blue();
        if (roomParameters.GetBool("BlueHasNothing")) {
            set_empty_inventory(blueTeam.Inventory);
        }
    }

    // по запросу на вход в команду - кидаем игрока в команду
    room.Teams.OnRequestJoinTeam.Add(function (player, team) { team.Add(player); });
    // если игрок сменил команду или выбрал ее, то происходит спавн игрока
    room.Teams.OnPlayerChangeTeam.Add(function (player) { player.Spawns.Spawn() });
}

jQuery.fn.boton = function () {


    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://superheroapi.com/api.php/8a0c6fd8d7afbc8776d694f193cd08ba/${numero}`,
        "method": "GET",
        "dataType": "json",
        "headers": {
            "Accept": "*/*",
        }
    };

    $.ajax(settings).done(function (response) {
        let hero = response;
        let aliases = hero.biography.aliases
        let heroAliases = ''
        // let power = Number(hero.powerstats.power) || 0
        // let combat = Number(hero.powerstats.combat) || 0
        // let durability = Number(hero.powerstats.durability) || 0
        // let speed = Number(hero.powerstats.speed) || 0
        // let strength = Number(hero.powerstats.strength) || 0
        // let intelligence = Number(hero.powerstats.intelligence) || 0
        let habilidades = []
        for (const power in hero.powerstats) {
            if (hero.powerstats[power] !== null) {
                
                habilidades.push({ y: Number(hero.powerstats[power]) || 0, name: power })
            }else{
                continue;
            }
        }
        


        for (let i = 0; i < aliases.length; i++) {
            heroAliases += `${aliases[i]} `
        }
        let card = `
    <h4 class="text-center">SuperHero Encontrado</h4>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${hero.image.url}" class="img-fluid img-hero" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Nombre: ${hero.name}</h5>
                <p class="card-text">Conexiones: ${hero.connections['group-affiliation']}</p>
                <ul class="list-group">
                    <li class="list-group-item">Publicado por: ${hero.biography.publisher}</li>
                    <li class="list-group-item">Ocupación: ${hero.work.occupation}</li>
                    <li class="list-group-item">Primera Aparición: ${hero.biography['first-appearance']}</li>
                    <li class="list-group-item">Altura: ${hero.appearance.height[0]}-${hero.appearance.height[1]}</li>
                    <li class="list-group-item">Peso: ${hero.appearance.weight[0]}-${hero.appearance.weight[1]}</li>
                    <li class="list-group-item">Alianzas: ${heroAliases}</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    
    `;
        $("#cardHero").html(card)

        //--------------------------------------------------------------

        $("#chartContainer").CanvasJSChart({

            title: {
                text: `Estadística de Poder para ${hero.name}`
            },
            legend: {
                cursor: "pointer"
            },
            data: [{
                type: "pie",
                showInLegend: true,
                toolTipContent: `{name}: ({y})`,
                indexLabel: "{name} ({y})",
                dataPoints: habilidades,
            }]
        });

        // chart.render();

    });

    return this

}
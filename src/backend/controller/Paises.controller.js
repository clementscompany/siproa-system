export async function atualizarPaises(req, res) {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,flags,currencies");
        const data = await response.json();

        //limpar a tabela antes de inserir 
        await pool.query("TRUNCATE TABLE paises");

        //inserir todos os paises
        const insertPromises = data.map(c=>{
            let name = "desconhecido";
            let code = "XX";
            let flag = "";

            if(c.name && c.name.common) name = c.name.common;
            if(c.cca2) code = c.cca2;
            if(c.flags){
                if(c.flags.png){
                    flag = c.flags.png;
                }else if (c.flags.svg){
                    flag = c.flags.svg
                }
            }

            //pegar a moeda
            let currencyCode = "";
            let currencyName = "";
            let currencySymbol = "";

            if(c.currencies){
                const first = Object.keys(c.currencies)[0]//primeira moeda
                if(first){
                    currencyCode = first;
                    currencyName = c.currencies[first]?.name || "";
                    currencySymbol = c.currencies[first]?.symbol || "";
                }
            }

            return pool.query("INSERT INTO paises (nome,codigo,flag,currency_code,currency_name,currency_symbol) VALUES (?,?,?,?,?,?)",[name,code,flag,currencyCode,currencyName,currencySymbol]);
        });

        await Promise.all(insertPromises);
        res.json({message:'Paises atualizdas com sucesso!', total: data.length});
    } catch (err) {
        console.error(err);
        res.status(500).json({error:'Erro ao atualizar paises'});
    }
}

export async function listarPaises(req,res) {
    try{
        const [paises] = await pool.query("SELECT idpaises, nome AS name, codigo AS code, flag, currency_code,currency_name,currency_symbol FROM paises ORDER BY nome ASC");
        res.json(paises);
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Erro ao buscar paises'});
    }
}

async function carregarPaises() {
    const tbody = document.getElementById("countries");
    tbody.innerHTML = "<tr><td colspan='6'>Carregando...</td></tr>";

    try {
        const res = await fetch("http://localhost:3000/api/auth/countries");
        const data = await res.json();

        tbody.innerHTML = "";

        data.forEach(p => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
            <td>${p.name}</td>
            <td>${p.code}</td>
            <td> ${p.currency_name || ""}</td>
            <td>${p.currency_code || ""}</td>
            <td>${p.currency_symbol || ""}</td>
            <td><img src="${p.flag}" alt="bandeira de ${p.name}"></td>
            `;

            tbody.appendChild(tr);
        })
    } catch (err) {
        console.error(err);
        tbody.innerHTML = "<tr><td colspan='6'>Carregando...</td></tr>";
    }
}

carregarPaises();
function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yIvTU1snQA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxl_0O6xelfL-6cV2AZAV-oeAFGeDm7i8-Zc6ARTc_KigKDPsIrk-S6w62Z73uZsdm6GQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v14q1attempts:player.GetVar("v14q1attempts"),v14q1answeredcorrect:player.GetVar("v14q1answeredcorrect")})
	}
	)
}


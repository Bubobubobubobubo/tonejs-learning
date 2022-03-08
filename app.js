const sampler = document.getElementById("sampler");
const pads = [
    document.getElementById("pad1"), document.getElementById("pad2"),
    document.getElementById("pad3"), document.getElementById("pad4"),

    document.getElementById("pad5"), document.getElementById("pad6"),
    document.getElementById("pad7"), document.getElementById("pad8"),

    document.getElementById("pad9"), document.getElementById("pad10"),
    document.getElementById("pad11"), document.getElementById("pad12")
]
notes = ["C4", "D4", "E4", "F4", 
         "G4", "A4", "B4", "C5",
         "D5", "E5", "F5", "G5"]

document.documentElement.addEventListener(
  "mousedown", function(){
    mouse_IsDown = true;
    if (Tone.context.state !== 'running') {
    Tone.context.resume();
}})

reverb = new Tone.Reverb().toDestination();
volume = new Tone.Volume(-8).connect(reverb);
synth = new Tone.MembraneSynth().connect(volume);

for (let i=0; i < pads.length; i++){
    pads[i].addEventListener("click", function(){
        synth.triggerAttackRelease(notes[i], '4n');
    });
}
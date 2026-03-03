---
subid: fundamental
title: Fundamental Forces and Particles
topic: quantum2
---

*For the negative 2 people who care, the way the code for this website works it that, instead of creating a seperate HTML file for each page, I have a JavaScript file with a list, containing the HTML in a string. Then when you click a subtopic, the relevant HTML is pasted into the 'subtopic.html' file, via `page.innerHTML = subtopics.content`. There are two problems with this though. For one, writing this much HTML is a faf, because I have to use a bunch of tags. So I have to use p tags every time I want to do a new sentence etc. Secondly, since I'm writing HTML in a JavaScript string, I don't even get the benefits of VS code's autocomplete or colouring, bc thinks its just a giant string so it's just a big brown mess.*

*However, I've now developed a way to use Node.js to create a system where I just type what I want into a Markdown file, and then put `npm run generate` in the terminal, and it automatically converts it into HTML and places it in the string for me. And this is the first file I'll be writing this way!*

### Fundamental Forces

The **electromagnetic force**, EM force for short, acts on anything with an electric charge

The **weak nuclear force**, or just the weak force, acts on anything with a 'weak charge'. And don't let the name fool you, it's actually pretty strong, stronger than the so-called strong force. It just has a much smaller range, which makes it *look* weak. What the bloody hell is a weak charge, you ask? I ain't got a clue so don't ask me...

And finally, the **strong nuclear force**, or the strong force (I introduced him after labeling him as weaker than the weak force, sorry bro) acts between particles with 'colour charge'. Colour? That sounds interesting, can't wait to learn about that!!

Oh yeah, and there's also **gravity** too, but it's actually really really *really* weak, so like we'll ignore it for this topic. Plus it's been the focus of like everything up until now, let's give the other ones a change, ey?

### Fundamental Particles

We know about protons, electrons and neutrons, and up until now these have been the fundamental particles. But there are more. Much much more. In fact, protons and neutrons can be split up into smaller parts.

<h4>Fermions</h4>

Fermions are very much the main characters. In short these are / make up the particles we've been used to all this while, protons, neutrons and electrons. And the fermions are also split into two groups

- First we have the **leptons**, which include the one and only electron. So for now just think of leptons as relatives of the electron. There are two kinds of leptons, the ones which are also negatively charged like the electron (i.e. the muon and the tauon), and the neutrinos (electron neutrino, muon neutrino, and the tauon neutrino) which have no charge. Neutrinos are also very very small compared to the rest of the family.
- Secondly we have the **quarks**, which make up the protons and neutrons. These can also be thought of as being split into two groups: the quarks with a +2/3 charge (up quarks, charm quarks and top quarks) and the ones with a -1/3 charge (down quarks, strange quarks and top quarks).

And for some bloody reason (nobody knows why...) they all come in 3 generations. So we have muons which are heavier electrons and tauons which are heavier muons (same is true of their neutrino counterparts). There are charm quarks which are heavy up quarks, and top quarks which are heavy charm quarks. And there are strange quarks which are heavy down quarks and bottom quarks which are heavy strange quarks. 

What makes this especially freaky is the fact that... the heavier versions don't bloody do anything? Well not that they don't do anything but like... pretty much everything in the universe uses the lightest version. We mostly deal with electrons, as well as protons and neutrons (which are made up of up and down quarks), and the other versions kinda just... show up? (Like how we mentioned muons that one time in Special Relativity). So why the universe insists on creating heavier versions, God alone knows.

<h4>Bosons</h4>

Here's something a bit newer. Up until now we've thought of forces as just things which happen. Turns out there are tiny particles which do the work. These are called **Bosons**.

- The first boson is one we all know and love, the **photon**, or more accurately, the **virtual photon**. The virtual photon is what carries the electromagnetic force.
- The **gluon** is what carries the strong nuclear force (because it *glues* the nucleus together).
- The weak force actually has 3 potential candidates to choose from, the positive W boson, the negative W boson, and the neutral \\(Z^0\\) boson. Which one it picks depends on the interaction, as we will soon see!

<h4>Antiparticles</h4>

Another cool phenomenon is the existance of **antiparticles**. Each fermion and boson has an antiparticle, which has the same mass, same spin, same pretty much everything, except it has an opposite charge.

So for example, the up quark has an evil twin brother known as the antiup quark. The electron has an evil twin sister known as the positron. The bottom quark has an evil twin brother called the antibottom. Every particle's evil twin has the same name with the 'anti-' suffix at the front (except the electron).

<h3>Leptons</h3>

Now it's time for use to look at these particle types in more detail. Like I said before, there are the normal leptons like electrons and muons, and then their neutrino counterparts (I know that's probably slightly neutrinophobic, in that I'm suggesting neutrinos are weird, but I don't know what else to call the non-neutrinos so 'normal' will have to do). The normal leptons have a -1 charge, and the neutrinos have 0 charge.

When it comes to learning about these different particle types, the main challenge ('challenge' is probably overhyping the difficulty, it's quite simple but takes up some of your Hippocampus' RAM) is remembering which particles feel which forces. In the case of leptons, these are particles which feal the *weak force* and the *EM force* (actually nvm, neutrinos don't actually experience the EM force bc they don't have electric charge, but you get the point). Leptons have no relationship with the strong force. No matter how much strong force there is, the leptons just won't respond.

BTW, since leptons experience the weak force, this must mean they have a weak charge (or *weak isospin* if you want to be a nerd). And they do! The normal leptons have a positive weak charge (\\(T_W = +1/2\\)) and neutrinos have a negative weak charge (\\(T_W = -1/2\\)), and these isospins are what bosons use to tell the neutrinos and normal leptons apart. Unfortunately W bosons don't have very good eyesight, so they can't see how massive the leptons are or what charge they are. They also don't have very good taste buds, so they can't taste the difference between different flavours.

Why do these isospins matter? Because the \\(W\\)-bosons have them! That means by interacting with one of these bosons, you can turn a non-neutrino into a neutrino, or a neutrino into a non-neutrino. 

The \\(W^+\\) boson has a \\(T_W = +1\\) weak charge. So if a \\(W^+\\) boson gets eaten up by a neutrino – let's say a muon neutrino – that means the neutrino's isospin will increase by 1. Neutrinos have isospins of \\(T_W = -1/2\\), so increasing it by one changes it to \\(T_W = +1/2\\), which means it's now a non-neutrino! We can write this as a formula:

\\[ \\mu^- + W^+ = \\nu_\\mu \\]

The final thing to learn about is **lepton number**. Each lepton and lepton neutrino has a lepton number of \\( L=+1 \\), and each antilepton and antineutrino has a lepton number of \\( L=-1 \\). In fact, each individual flavour of leptons and neutrinos has their own lepton number (\\( L_e=+1, ~ L_\\mu=+1, ~ L_\\tau=+1 \\)) and each antilepton and antineutrino has their own lepton number (\\( L_e=-1, ~ L_\\mu=-1, ~ L_\\tau=-1 \\)).

And for some strange unknown reason, in any interation, the total lepton number before the interaction must be the same as the total lepton number after the interaction. This will come in handy a bit later down the line.

### Quarks

Echoing what I said earlier, some quarks have a \\(+2/3\\) charge (the up, charm and top), and the others have a \\(-1/3\\) charge (the down, strange and bottom). The positively charged quarks have a \\(T_W = +1/2\\) weak charge and the negatively charged quarks have a \\(T_W = -1/2\\). Like with leptons, that means quarks can eat or spit out a \\(W\\)-boson to change from a top-row quark to a bottom-row quark.

Since all quarks have electric charge and weak charge, quarks can feel the EM force and the weak force. They also have something called colour charge, which means they interact with the strong force. What is colour, you ask? There are 3 versions of the strong nuclear force, red (\\(r\\)), green (\\(g\\)), and blue (\\(b\\)). Each quark will have one of these colours associated with them. The quarks' evil twin relatives also have colours, but these are anticolours: antired (\\(\\bar{r}\\)), antiblue (\\(\\bar{b}\\)) and antigreen (\\(\\bar{g}\\)).

Any *hadron* (that's the proper name for a particle made by combining quarks, such as a proton or a neutron) must overall be colourless. This can be done either by combining a colour with an anticolour (i.e. \\( r\\bar{r}\\), \\( b\\bar{b}\\) or \\( g\\bar{g}\\)) or by combining all three (i.e. \\(rgb\\) or \\(\\bar{rgb}\\)).

And depending on whether you put 2 together (quark-antiquark pair) or 3 together, the combined particle is given a different name.

- **Baryons** are what we get when we combine 3 quarks or 3 antiquarks, and contain the particles we all know and love, the protons and neutrons. Protons contain 2 up quarks and one down quark (\\( uud \\)) and neutrons contain 2 down quarks and one up quark (\\(udd\\)). If you add up the charges, you'll see that this actually produces the positive and the neutral charge of each particle respectively. There are also a bunch of other ones you probably ain't heard of, like the sigma particle, \\( \\Sigma^0(uds) \\).
- **Mesons** are a combination of 1 quark and one antiquark. You can't just combine any two though, the overall charge needs to be either zero or some integer. An example of this is the \\( D^0(c\\bar{u})\\) particle

And technically it doesn't have to stop at 2 or 3, you can have four quarks (called tetraquarks) or even five quarks (called pentaquarks) together so long as the result is colourless. But these are quite rare as they require a lot of energy, so we'll stick with these for now.

And a bit like how leptons had lepton numbers, hadrons have **baryon numbers**, which describe how baryon-eqsue a particle is. Baryons have a baryon number of \\( B=1 \\) and antibaryons have a number of \\( B=-1\\). Mesons have a baryon number of \\( B=0 \\), because they ain't flipping baryons.

### Conservation Laws

You've seen conservation of energy and conservation of momentum.

When it comes to particle interactions, there are also a number of things which need to be conserved

1. Electric charge: Every interaction must conserve electric charge
2. Colour charge: Well only the strong force sees colour, so only the strong force 'needs' to conserve it. Either way the colour before the interaction must be the same as the colour after the interaction
3. Baryon number: The number of quarks on both sides of the interaction must be the same in any interaction
4. Lepton number: This only needs to be conserved by the weak interaction, since the EM interaction can't change leptons and the strong force don't see leptons
5. Quark flavour: This needs to be conserved by the strong and EM interactions. Like I said before, \\(W\\)-bosons can change quark flavour by making a top-row quark a bottom-row quark. But the weak interaction is the only one which can do this.
6. Kinematics: Energy and momentum still need to be conserved. C'mon now, the basics are still important y'know.








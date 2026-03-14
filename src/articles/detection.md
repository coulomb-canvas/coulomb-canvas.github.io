---
subid: detection
topic: quantum2
title: Particle Detection
---

We know which particles exist, how they interact with each other, how to probe them and how to get our hands on them. The final thing to do is to learn how we can observe them in the collider

Each particle interacts with matter slightly differently, resulting in a visual difference in the collider.

### Muons

These are the easiest one to spot, since they actually don't do anything particularly interesting. They just spew out a tiny bit of ionisation as they move through the detector.

That means if there is something in the detector which kinda just goes, maybe with a little bend, it's probably a muon

### Photons and Electrons

These are a little bit more interesting than the muons. Remember back when I was telling you about cosmic air showers in the [Natural Particle Sources](http://127.0.0.1:5500/subtopic.html?subid=sources&topic=quantum2&year=1) section? I mentioned that electrons produce photons, which produce electron and positron pairs via *pair production*, and they repeat this process a bunch. This is what we call an *electromagnetic shower* (or *electromagnetic cascade*), where they continue to split until they run out of energy.

Particles can only go so far before they eventually split in one of these ways. If you have a material with thickness \\(x\\), the odds of it coming out without splitting at all is: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P(x) e^{-\frac{x}{X_0}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

It looks like we have a new guest, \\(X_0\\). This is the *radiation length*, and its a quality unique to every material, a bit like conductivity or melting point. It tells us (on average) the length of that material required to reduce the probability to about 37%. In other words, it measures how long a distance the material needs to squash the particle's rebellion.

### Hadrons

Hadrons are pretty damn similar to photons and electrons with the way they interact with matter, although they interact with the strong force rather than the EM force. They are pretty complicated, way more complicated than anything the electrons and photons are able to produce. But they do follow a similar rule in terms of probabilities:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P(x) e^{-\frac{x}{\lambda_I}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Essentially the same formula, except we now have \\(X_0\\)'s cousin, \\(\\lambda_I\\) which is the *hadronic interaction length*. I mean I shouldn't have to explain this to you should I? It's literally the same thing but for hadrons.

### The structure of a collision detector

Now we know all about how the different particles interact with matter, you, yes YOU, can begin to make yourself your very own particle collider. Impressive as they might sound or look, they are actually quite boring in design. 

<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Quantum/Detector.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 4: Particle Detector
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            In short, you have a thingy in the middle which spews out all the particles, then you have a layer which detects some particles, then another layer which detects the particles the first layer couldn't detect, and then ANOTHER layer which detects the particles those two layers couldn't detect, and the a bunch more layers to detect what the first 3 layers couldn't detect.
        </p>
        <p>
            The 'thingy in the middle which spews out all the particles' is more precisely known as the *beam pipe*.
        </p>
    </div>
    <!-- DIVIDING LINE -->
</div>


#### Tracking detector

The first layer is the *tracking detector*. This part has a magnetic field which will cause the charged particles to curve. Once they curve, we capture them, put them in handcuffs and send them to the police to be detained. The police will then be able to determine other qualities about these charged particles, like their momentum.

#### Electromagnetic Calorimeter

Some of these criminals were detained by the tracking detector. But many of the particles are smarter than that. So we move onto our next strategy: *feed 'em a bunch of calories!*

The next layer is the *electromagnetic calorimeter*, which is really really dense. Since like I said a while ago, only a small amount of particles can go through a layer of material without bremsstrahlung-ing, this dense layer causes most of the photons and electrons to split. This creates a distinctive fingerprint, which looks like a tree branch.

Not only will this catch most of the charges particles which escaped the tracking detector, but it will also capture most of the photons.

#### Hadronic Calorimeter

So now we've caught all our photons and electrons. However the EM calorimeter, despite being of quite dense material, is quite thin. As a result some particles don't feel like eating the EM calories. So we instead give 'em something they can't resist...

The next layer is the *hadronic calorimetre* (I do notice that it's a bit tapped to start these paragraphs of with "the nth layer is the [title of the section], as if I would title it "Hadronic Calorimeter", just to then have the next layer NOT be the hadronic calorimeter. But whatever I don't know how else to start these paragraphs so just charge it for now). This layer is designed to be very thick, meaning hadrons can't resist but to munch on the thick, creamy dessert. As they are feasting, we capture them, and interrogate them like last time.

#### Muon Detector

At this point, we have captured and detained all types of particles, except one: the muons.

Since muons are charged particles, they were affected by the tracking detector. But since they are trying to eat healthy, they all somehow managed to not consume a single calory, meaning we couldn't catch them.

Ok then, no problem. Since you didn't fall for the calory bait, let's make things much more entertaining for ourselves. Let's just put a bunch of charged-particle-spiny things outside of everything else. So then you'll all be put off balance, causing them to spiral out of control and get really really dizzy, so then we can get whatever information we need from them.

### TL:DR

- Collision detectors are basically just a bunch of different detecty things stacked on top of each other
- The first layer is the *tracking detector* which causes charged particles to change direction due to the magnetic field
- The second layer is the *electromagnetic calorimeter*, a thin layer which causes photons and electrons to do the bremsstrahlung-splitty-thing
- The third layer is the *hadronic calorimeter*, a thicker layer which detains hadrons
- After that we put a bunch more tracking detectors to observe the remaining muons.

And remember: particles are dirty criminals


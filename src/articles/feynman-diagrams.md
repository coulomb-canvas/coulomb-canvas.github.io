---
subid: feynman-diagrams
title: Feynman Diagrams
topic: quantum2
---

Feynman diagrams are really cool, because they are one of those things which people blindly mention when they are talking about physics, alongside characters like \\(E = mc^2\\).

They're basically little poorly drawn comics describing the interactions between the particles. 

And quick note: if you did AQA Physics for A-level, you'll remember we did this with time on the \\(y\\)-axis and space on the \\(x\\)-axis for some bloody reason. Well my lecturer said that this is dumb, and decided to draw them the more intuitive way, with time on the \\(x\\)-axis and space on the \\(y\\)-axis.

Each comic has 3 chapters:

1. The **external lines** - basically the reactants and the products. They are at the beginning and the end of the story (id est the "exposition and denouement" if we are using proper GCSE terminology). 
2. The **internal lines** - this describes the point where the two (or more) particles interact, and a boson is exchanged. A bit like the "climax" in English
3. The **vertices** - the points where the internal and external lines meet, and is the point at which the particles interact. These are the rising and falling action in a story.

So you know how you thought that the stuff you learnt in GCSE English wasn't gonna be useful? Turns of it *is* useful, useful for making sense of *my* analogy. All those years of doing the worst subject in existance built up to this moment.

On top of those, we also need to know what exactly the different lines and squiggles represent.

An arrow going to the right is a fermion. Any old fermion, like a quark or a lepton. Quite confusingly though, you can also have an arrow going to the left. You might be confused, since going left on a time axis would imply the fermion is going back in time. But it turns out it's actually the fermion's evil twin, the antifermion. It likes to pretend it can go back in time, but it's not actually.

The usual sine wavy squiggle is a photon, which we've been using for electromagnetic waves up until now, so that shouldn't be too much of a problem. \\(W\\)-bosons also have the same squiggle though, so remember that I guess.

The \\(Z^0\\) boson is drawn with a dotted line, and the gluon is drawn with a coil-type thingy. There is actually no reason for any particular squiggle other than convention, so you'll have to just learn them.

### Drawing Feynman Diagrams

Now we know a bit about how to read 'em, now it's time to figure out how to draw them ourselves. Starting with our first law:

"All the conservation laws must be applied at every vortex"

What does this mean? This is kinda like the particle physics version of Kirchoff's first law. In a circuit, the amount of charge exiting a junction must be the same as the amount of charge entering a junction. Likewise, the amount of electric charge entering a vortex must equal the amount of charge exiting the vortex.

Take this example here: ...

What makes this a tad more fiddly is that when it comes to particle physics, it's not just electric charge that needs conserving. It's also baryon number, and lepton number, and colour charge, and quark flavour, AND momentum which needs to be conserved. At EVERY vortex.

We can see that again in our example: ...

We also have our second law:

"The particles emitted must match up with the force applied in the interaction"

This should be fairly obvious tbf, but in case it ain't, all I'm trying to say is that you need to also think about what force is being used. If there is an electromagnetic interaction (such as 2 electrons repelling), it will only release the gauge boson for the EM force, id est the virtual photon. They won't randomly release a \\(W\\)-boson for no bloody reason, since there is no weak force taking place. These particles are actually quite principled, so they won't emit or absorb unrelated gauge bosons no matter how conserved the other stuff is.

### Drawing Feynman Diagrams

Here is a step by step guide to drawing Feynmann diagrams

#### Step 1: Figure out which force in involved

Like I said before, particles are very principled. They will only emit particles corresponding to their force. So a good place to start would be identifying which force is actually responsible.

Last time I mentioned how a neutrino can become a lepton, or a bottom-row quark can become a top-row quark, by eating or spitting out a \\(W\\)-boson. So that means if a quark changes flavour or a neutrino is created or destroyed, then the weak interaction is involved.

Again, if there's a photon, then the interaction is electromagnetic.

#### Step 2: Determine which particles are irrelevant

Irrelevant?! A bit rude, but it's lowkey true. Write out a list of all the individual quarks and leptons before the interaction. Then write out a list of all the quarks and leptons after the interaction. You may well notice that you'll get some of the same stuff on both sides.

Once you figure out which particles are wastemen, your diagram becomes a bit simpler.

#### Step 3: Look at what has changed

Now we know what force and what particles are involved, here's the fun part: trying to figure out which gauge boson is the culprit. Fun as it is though, it can be a slightly annoying process, since at first it feels like we just have to remember a tonne of random rules. But there is a method to the madness.

- Like I've said a quintillion times by now, if a quark changes flavour or a neutrino becomes a lepton (or vice versa), then the \\(W\\)-boson is the culprit.
- If there is the same stuff before and after the interaction, then it was probably just a photon, since they don't change anything. It could also be a gluon, since they are equally pacifistic.

- What happens if you end up with a quark-antiquark pair (not like a meson, as in seperately) of the same flavour? This is a form of pair production, where a boson kinda just spontaneously splits into a particle and its evil twin. Since quarks interact with all three forces (EM, weak and strong), any one of their bosons (virtual photon, \\(Z^0\\) or gluon respectively) could be responsible.
- Now what happens if instead we get a charged lepton-antilepton pair? This is another form of spontaneous boson splitting, but since leptons don't interact with the strong force, a gluon couldn't be the culprit, so only virtual photons and \\(Z^0\\)s could be responsible.
- What about a neutrino-antineutrino pair? Same logic as with the charged leptons, but since neutrinos aren't charged, they don't interact with the EM force, meaning they can't have been formed from the photon, but only the \\(Z^0\\) particle.

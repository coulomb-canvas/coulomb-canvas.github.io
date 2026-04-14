---
subid: semiconductors
title: Semiconductors
topic: qaia2
---

Last time we saw how orbitals can switch from discrete orbitals to bands of energy, using the Pauli Exclusion Principle and by squishing a gazillion atoms it a small space.

Now let's take an element, say – oh I dunno – something like Silicon, with an electron configuration \\( 1s^2 2s^2 2p^6 3s^2 3s^2 \\). That means the 3s orbital is the final orbital, ie the *valence orbital*. Except it's not an orbital anymore, it's a band, so we'll call it the *valence band*.

The valence electrons live in the valence band, but look up and see an empty, higher energy band, the \\( 3d \\) band. We'll call this next energy band the *conduction band*. We call it that because the electrons want to conduct and end up in this higher energy band. 

The valence band is completely full, considering all the electrons are still bound to their nuclei, and none of the electrons have left yet. But they would kinda like to see what life is like on the higher energy conduction band, and like I said, this conduction band is completely empty making it even more tempting.

If the valence band is partially full and there is no gap between the two bands, electrons can easily move from lower states to higher ones, since there is literally nothing stopping them. Since there is no gap between the two bands, they are – for all intents and purposes – the same band. This means they can move around just fine. In other words, this is a *metal*

If the valence is full and there is too large a band gap between the two bands, electrons are unable to move from the lower states to the higher ones. This makes an insulator.

But riddle me this: say we had a full valence band, but the band gap is quite small? Like a bandwidth of about 1eV? 

At first not much, since there is still an energy gap stopping lower band electrons from going into the higher band. But what if I decided to be kind? After all, 1eV isn't much energy, I'm sure I can lend it a little.

Now, with that little jolt of energy, the valence electron is able to jump up into the next band!

This creates what we call a *semiconductor*, something which only conducts when sufficient energy (like heat) is given to it. If there is no energy (i.e. a temperature of \\( 0K \\)) or not enough energy, then superconductors are useless. But once you give 'em a large enough boost, we're good to go!

### Doping

There are two ways we can do this

#### N-type Doping

The first method is *n-type doping* (n for *negative*). This involves replacing one of the particles with a particle which has more valence electrons.

Say we have silicon. It's in group four, meaning it has four electrons in its outer shell. ... So we use a laser or something to force a silicon atom out of the lattice and replace it with an element which has *five* electrons in its outer shell. Something like *Phosphorus* will do.

Now normally an atom like phosphorus would need to make 5 covalent bonds, but since it's not actually creating a lattice of its own, but rather filling in for silicon, it can only make 4 covalent bonds. That means only four of the 5 outershell electrons bond, meaning that there's one electron who can't really do anything. It can't be in the valence band, 'cus it's full. 

As a result, it pretty much just hangs around the phosphorus ion. Then again, this is a pretty weak bond with a *veeery* low binding energy (like about 40meV), way smaller than the 1.1eV band gap of silicon. And since, ultimately, entering the conduction band is just allowing the electron to be delocalised, that means we have a bunch of electrons which can be placed into the conduction band very easily, allowing electricity to conduct

#### P-type Doping

The second method is *p-type doping* (if 'n' was for negative, take a wild guess as to what 'p' would be for). Now instead, we replace one of the particles with an atom with less valence electrons.

So we take our atom-replacy laser and use it to displace one of the silicon atoms, but instead of replacing it with an atom with 5 valence electrons, we'll replace it with an atom that only has *3*, such as *Boron*.

Now, instead of a single extra electron floating around, there is an electron missing. This empty space is called a *hole* ... But it's much easier for us to *pretend* like the empty space is actually its own positive charge, because it more or less behaves like one. Much how like evil isn't a thing, but rather the privation of good.

And just like how the electrons from n-type doping sit just below the conduction band, these holes sit just above the valence band. The electrons from the valence band see the hole ... But now that electron's space is empty (i.e. the hole has moved to where the electron was).

This causes the flow of current

### The p-n Junction

### TL;DR

Now one thing you may well have been thinking over the course of this subtopic. Technically the reason that insulators don't conduct is because there is a large band gap, meaning the electrons don't have enough

- The band with an atom's outermost electrons is called the *valence band*.
- The next band up, which the electrons wish to enter, is the *conduction band*.
- If the valence band is partially full, and there is no band gap, the electrons can move across levels freely. This is true for *metals*
- If the valence band is full and there is a large band gap, the electrons can't move across at all. This is an *insulator*
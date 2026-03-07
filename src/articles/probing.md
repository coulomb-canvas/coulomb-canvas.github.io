---
subid: probing
topic: quantum2
title: Probing Particle Physics
---

*We've gone three entire subtopics without any equations?! It feels like an enormous dopamine release to finally see that orange formula box thing again.*

### Decay

<p>If you've made it this far in the course, you are probably familiar with the formula for radioactive decay. The number of particles at a certain time is equal to the initial amount, decaying exponentially with time.</p> \[N(t) = N_0e^{-\lambda t}\]

However, it's not only radioactive nuclei which decay. As a matter of fact, all particles - except protons, neutrinos and electrons - decay into more stable particles. For instance tauons and muons will always decay into electrons eventually.

And in the same way we can use the exponential decay formula to predict radioactive decay, you can use an eerily similar version of the equation to predict particle stabilisation decay:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ N(t) = N_0e^{-\Gamma t} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 1: Particle Decay
        </div><div class="formula-tooltip-desc">
        The number of particles in the ensemble diminishes exponentially with time.
        </div></span>
    </div>
</div>

With this funky *'decay rate'* \\( \\Gamma \\) symbol instead of the decay constant \\( \\lambda \\) we all know and love. Don't let the different symbols and slightly different names fools you though, it's practically the same thing (number of decays per second), just wearing a slightly different outfit.

And you might be thinking, "ALL other particles? Wouldn't that include neutrons? I thought they were stable?" Well... apparently not actually? All particles decay into lighter versions of themselves, and since neutrons are very slightly heavier than protons, they will decay into protons.

### The Branching Function

Particles will keep on decaying and decaying until they eventually become an electron, neutrino or proton. However there technically isn't any strict rule saying *how* they must do that, so long as they do so somehow. 

Each way a particle can decay is called a *mode*, and each mode has its own individual decay rate, \\( \\Gamma_i \\). 

<p>The default example of this is the decay of a positive pion, \( \pi^+ \). One way it can decay is into an antimuon and a muon neutrino:</p> \[ \pi^+ \to \mu^+ + \nu_\mu \]

<p>And this is the main way positive pions tend to decay, presumably because it's less work short term. It has a decay rate of \( \Gamma ( \pi^+ \to \mu^+ \nu_\mu) \approx 3.84 \times 10^7 \). Compare that to the pion skipping the muon step and just getting straight to the point, where it instantly becomes a positron and an electron neutrino:</p> \[ \pi^+ \to e^+ + \nu_e\]

Now pions are bloody lazy so this practically never happens, which can be seen by its stupidly low decay rate of \\( \\Gamma(\\pi^+ \\to \\mu^+ \\nu_\\mu) \approx 4.72 \times 10^3 \\). The *overall decay rate* of the particle (pion in this case) is just the sum of these two individual decay rates:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ \Gamma = \sum_i \Gamma_i \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 2: Overall Decay Rate
        </div><div class="formula-tooltip-desc">
        The overall decay rate is just the sum of each individual decay rate.
        </div></span>
    </div>
</div>

And if you add the pion-to-muon decay rate with the pion-to-electron decay rate, you get near enough the pion-to-muon decay rate that the pion-to-electron decay rate is practically insignificant. How worthless you ask? Well we can actually calculate it, through something known as the *branching function*. Really nothing fancy here, you just take the decay rate of the particular mode and then divide it by the total decay rate of the particle.

The branching function practically just gives you the percentage change of a particular mode of decay taking place. A bit like a ratio. In fact, it can allso be known as the *branching ratio*, \\(BR\\), a name I personally prefer. However I'll use both just so you get used to both names.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ BF_i = BR_i = \frac{\Gamma_i}\Gamma = \frac{\Gamma_i}{\sum_i \Gamma_i} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 3: Branching function / ratio
        </div><div class="formula-tooltip-desc">
        The rate at which a particular mode of decay takes place.
        </div></span>
    </div>
</div>

Just so you get an idea for how rare pion-to-electron decay is, it has a branching ratio of about \\( 0.0123 % \\). And guess where the remaining \\(99.9877\\) percents are? Almost entirely into pion-to-muon decay. 

### Particle Collisions

So one way we can know about particles is to observe how they decay. Now onto the destructophilic approach: smash particles together and see what happens.

The aim of the game is to use the collision kinematics established back in [Classical Mechanics](http://127.0.0.1:5500/topic.html?topic=mechanics&year=1), as well as some features of [Special Relativity](http://127.0.0.1:5500/topic.html?topic=relativity&year=1) to get information about the particles.

Starting with Relativity, we know that the speed of light (or causality) \\( c \\) doesn't change from frame to frame. In other word, the speed of light is an *invariant*. I mean that was like the whole point of the topic, no?

However it turns out the speed of light isn't the only invariant. There are two more things we can look at.

<p>The first is the <em>space-time interval</em>. Now I can't lie to you, I don't think we will be using this like EVER but it's being included for completion. If something happens at a location \( (x_A, y_A, z_A) \) at time \( t_A \) and some other thing were to happen at a location \( (x_B, y_B, z_B) \) at time \( t_B \), then this strange quantity doesn't change in any frame:</p> \[I = (x_A - x_B)^2 + (y_A - y_B)^2 + (z_A - z_B)^2 - c^2 (t_A - t_B)^2 \]

Now **here's** something we can actually use! The rest mass of an object also doesn't change from frame to frame.

Now I'm sure you are raring to use this newfound information, but before we do, since we are working with relativity, we're gonna have to spell out which frames we are using.

<p>The first is the <em>Center of Mass (CoM) frame</em>. Recall from the Special Relativity that in the CoM frame, the momentum before and after the collision is zero.</p> \[ \sum_\text{before collision} \vec{p} = \sum_\text{after collision} \vec{p} \]

*ICL why have I started speaking like my lecturers? On about some "rEcaLl" when have I ever said something like that before? I'm actually dying I'm so sorry I just put you through that...*

We also have the *Fixed Target Frame*. In this frame, we just assume one of the particles are stationary (\\( \\vec{p}_2 = 0 \\))

Last but not least, we have the *Lab frame*, where we assume that the environment where we've set up the experiment is at rest. In other words, each particle has its own velocity and its own energy.

### Two Body Collisions

It turns out that with collisions, there is one more invariant we can consider, called the *Mandelstam-S*, \\( s \\). The Mandelstam-S is a pretty perculiar quantity: it tells us the total energy in the CoM frame squared. 

Now you may be a bit confused: We have just gone out the way to define the Lab frame and the Fixed Target frame as distinct frames from the CoM frame. So then what bloody use it is knowing what the energy in the CoM frame is... in a frame which is quite literally NOT the CoM frame?

<p>Well be patient my friend, you'll soon see. But before that, I've just notice I haven't actually shown you how to calculate it. I mean, it shouldn't be too much of a surprise. We know that the rest energy squared for a single particle in the CoM frame is the energy of the particle squared take away its momentum times by the speed of light squared.</p> \[ E^2 + \vec{p}^2c^2 = (m_0c^2)^2 \]

<p>All the Mandelstam-S does is take that and generalise that for multiple particles. The principle of linear superposition kinda applies here in a weird way, such that you can add the individual energies to get a bigger energy before squareing, and you can add the individual momenta together to get a total momentum before squareing. So that gives us our Mandelstam-S formula:</p> \[ s = \left( \sum_i E_i \right)^2 + \left( \sum_i \vec{p}_i \right)c^2 \]

And since we only have two particles for now, let's make life a bit easier for ourselves:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ s = (E_1 + E_2)^2 - |\vec{p_1} + \vec{p_2}|^2c^2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 4: The Mandelstam-S
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

#### Mandelstam-S in the COM frame

<p>In the Centre of Mass frame, there is no total momentum, since \( \vec{p}_1 = -\vec{p}_2 \). So if we take our formula for the Mandelstam-S and replace \( \vec{p}_2 \) with \( -\vec{p}_1 \), we get the value of \( s \) in the COM frame</p>\[ \begin{align} s_{\text{CoM}} &= (E_1 + E_2)^2 \cancel{- |\vec{p_1} - \vec{p_1}|^2c^2} \\ &= (E_1 + E_2)^2 \end{align} \]

And when you think about it, this shouldn't be much of a shock. Remember the Mandelstam-S is the energy in the rest frame squared, and thats exactly what we ended up with! 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ s_{\text{CoM}} = (E_1 + E_2)^2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 5a: The Mandelstam-S in the CoM frame
        </div><div class="formula-tooltip-desc">
        Literally just energy squared, as you'd expect.
        </div></span>
    </div>
</div>

That was easy, anyway, moving on...

#### Mandelstam-S in the fixed target frame

<p>Now we assume one of the particles, we'll say the first one, is at rest. Meaning the first particle has no momentum, \( \vec{p}_1 = 0 \). That also means that the first particle's energy is its <em>rest energy</em>, \( E_1 = m_1c^2 \). Plugging those in, we get:</p> \[ \begin{align} s_\text{fixed target} &= ( m_1c^2 + E_2 )^2 - |\vec{p}_2|^2c^2 \\ &= m_1^2c^4 + 2E_2m_1c^2 + E_2^2 - |\vec{p}_2|^2c^2 \end{align} \]

<p>Erm, can't lie that looks ugly as hell. Luckily we can simplify it a bit. If you look carefully, like really carefully, you'll notice that there is a \( E_2^2 - |\vec{p}_2|^2c^2 \) at the end, which we know is the rest energy of particle 2, \( m_2^2c^4 \). So we then get</p> \[ s_\text{fixed target} = m_1^2c^4 + 2E_2m_1c^2 + m_2^2c^4 \]

Now at this point there is nothing we can really do, so we kinda have to charge this quite unappetising formula. Although, since colliders typically use very very *very* large energies, if we assume these energies are way way *way* bigger than the masses (so \\( E_2 \\gg m_1 \\) and \\( E_2 \\gg m_2 \\)), then we can kinda just sweep the rest energy terms under the rug, since the \\( 2E_2m_1c^2 \\) term is gonna hopefully be so big that the \\( m_1^2c^4 + m_2^2c^4 \\) - or lack thereof - won't really make a difference. So by throwing those terms in the bin, we end up with:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ s_{\text{fixed target}} \sim 2E_2m_1c^2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 5b: The Mandelstam-S <br> in the fixed target frame
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

#### Mandelstam-S in the lab frame

<p>Now this is where things get tedious. Now we don't have any pretty little assumptions to work with, each particle has its own energy and its own momentum. Since we have nothing better to do, let's start by expanding out the formula, might as well right?</p>\[ s_\text{lab} = E_1^2 + 2E_1E_2 + E_2^2 - |\vec{p}_1|^2c^2 - |\vec{p}_2|^2c^2 -2\vec{p}_1 \cdot \vec{p}_2 c^2 \]

<p> We can use the \( E^2 - \vec{p}^2c^2 = (mc^2)^2 \) relation we've been using to simplify this equation a little bit:</p> \[ s_\text{lab} = (m_1c^2)^2 + (m_2c^2)^2 + 2E_1E_2 -2\vec{p}_1 \cdot \vec{p}_2 c^2 \]

<p>And once again there isn't really anything else we can do, so time to pull some assumptions out of our arseholes! First let's do the thing from last time where we throw \( (m_1c^2)^2 \) and \( (m_2c^2)^2 \) in the bin because we are assuming that the collider's energies are super big or whatever:</p> \[ s_\text{lab} = 2E_1E_2 -2\vec{p}_1 \cdot \vec{p}_2 c^2 \]

<p>Next let's assume that this collision is head on. That means that particle one and two are looking directly at each other when they collide. Since the angle is now \( \theta = 0 \), the dot product of the momenta becomes</p> \[ \vec{p}_1 \cdot \vec{p}_2 = |\vec{p}_1| |\vec{p}_2| \cos{0} = -|\vec{p}_1| |\vec{p}_2| \]

<p>Stick that in and we get:</p> \[ s_\text{lab} = 2E_1E_2 + 2|\vec{p}_1| |\vec{p}_2| c^2 \]

<p>which you may think is hardly a bloody improvement, but stick with me, I'm onto something. If \( E^2 = (mc^2)^2 + (\vec{p}c)^2 \), and we are assuming \( mc^2 \) is small enough that we can throw it in the bin, then that would also mean that, at least for the sake of our assumption: </p> \[ E^2 = \cancel{(mc^2)^2 +} (\vec{p}c)^2 \quad \therefore \quad E \sim |\vec{p}|c \]
<p>So if \( E_1 \sim |\vec{p}_1|c \) and \( E_2 \sim |\vec{p}_2|c \), then \( 2|\vec{p}_1| |\vec{p}_2| c^2 \) becomes \( 2E_1E_2 \), which lands us at a much more visually pleasing result:</p>\[ s_\text{lab} \sim 2E_1E_2 + 2E_1E_2 \]\[ \downarrow \]

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ s_{\text{lab}} \sim 4E_1E_2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 5c: The Mandelstam-S <br> in the lab frame
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

There, much better! And all it took was **two** bastardised assumptions!




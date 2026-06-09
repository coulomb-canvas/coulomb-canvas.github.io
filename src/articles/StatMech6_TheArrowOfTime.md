---
subid: time-arrow
title: The arrow of time
topics: stat
---

Why does time flow forward?

We have the probability of being in a certain state at a certain time as \\( p_\nu \\), as we've had all this while. Now let's say all the particles in the \\( \nu \\) state are beginning to get sick and tired of the state theythere's some other state \\( \nu' \\), with a probability \\( p_{\nu'} \\)




 

 

With that said, some of the particles in the nu’ state are also beginning to get sick and tired, and want to enter the nu state.  

Having said that, I’m a tyrant, and hence I don’t care what happens to the nu’ particles. What I wanna know is how much the probability of a particle nu state p_nu changes over time () 

The rate at which a particle transitions from one state to another is called the transmission rate, T. So, to calculate the number of nus which are converting, I just take the probability of a particle being a Neo, and multiply it by the rate at which these Neos convert to Primism

Now one might think that’s all, but there’s more. Since there are actually Primes which are becoming Neos, the rate of change increases by the amount that become Neos too: 

<div class="eqn"> \[
    \frac{dp_\nu}{dt} = \sum_{\nu'} T_{\nu \to \nu'} p_{\nu'} - \sum_{\nu'} T_{\nu' \to \nu} p_\nu
\] </div>

The principle of detailed balance tells us that, in equilibrium, the transition rates between any 2 specific states are the exact same: 

<div class="eqn"> \[
    T_{\nu \to \nu'} = T_{\nu' \to \nu}
\] </div>

That means we can sub out the transition rate: 

<div class="eqn"> \[
    \frac{dp_\nu}{dt} = T_{\nu' \to \nu} \sum_{\nu'} (p_{\nu'} - p_\nu)
\] </div>

Here’s a brand-new quantity, the *magic \\(H\\)*: 

*Spoiler alert, it’s literally just the formula for entropy, except it’s negative for some bloody reason, and they removed the \\( k_B \\). Why they didn’t just use entropy, God knows, but whatever I doubt you actually care.*

So, now let’s see how the ~~magic H~~ *entropy* changes over time. This is pretty easy, just take a derivative with respect to time. Since we are differentiating a product, we must use the <span class="definition" data-definition="\[ \frac{d}{dt}(uv) = u'v + uv' \]"> product rule</span>. And when we do, we get: 

<div class="eqn"> \[ \begin{align} \frac{dH}{dt} 
    &= - \sum_\nu \left( \frac{dp_\nu}{dt} \ln p_\nu + p_\nu \frac{1}{p_\nu} \frac{dp_\nu}{dt} \right) \\[6pt]
    &= - \sum_\nu \frac{dp_\nu}{dt} \ln p_\nu - \sum_\nu \frac{dp_\nu}{dt}
\end{align} \] </div>

As for that last time, the total probability won’t change over time, so we can ignore it, meaning: 

<div class="eqn"> \[
    \frac{dH}{dt} = - \sum_\nu \frac{dp_\nu}{dt} \ln p_\nu
\] </div>

Put in the value for \\( \frac{dp_\nu}{dt} \\) we had before:

<div class="eqn"> \[ \begin{align}
    \frac{dH}{dt} &= - \sum_\nu \sum_{\nu'} T_{\nu' \to \nu} (p_{\nu'} - p_\nu) \ln p_\nu \\[6pt]
    &= - \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu'} - p_\nu) \ln p_\nu
\end{align} \] </div>

Remember his formula, because it's gonna come in hand in a second. Anyway, here’s where things get a bit techy, so pay attention. Have you made your payment? Excellent, let’s go then! 

I obviously described the particles in the \\( \nu \\) state as the *Neos* and the particles in the \\( \nu’ \\) state as the *Primes* for the sake of making the silly little political conflict story. Having said that, they aren’t actually any different mathematically (I guess you could say they are... *two wings of the same bird*?!). At the end of the day, \\( \nu \\) is just “some state” and \\( \nu’ \\) is just “some other state”. So, if switch all the Neos and the Primes around, mathematically there is no actual difference, the sum is the exact same: 

<div class="eqn"> \[ \begin{align}
    \frac{dH}{dt} &= - \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu'} - p_\nu) \ln p_\nu\\[6pt]
    &= - \sum_{\nu, \nu'} T_{\nu \to \nu'} (p_{\nu} - p_{\nu'}) \ln p_{\nu'}
\end{align} \] </div>

Then thanks to <span class="definition" data-definition="At equilibrium: \[ T_{\nu \to \nu'} = T_{\nu' \to \nu} \]">detailed balance</span>, we can switch the primes and the news on the transition term back around: 

<div class="eqn"> \[
    \frac{dH}{dt} = - \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu} - p_{\nu'}) \ln p_{\nu'}
\] </div>

Now let’s look at the term in the brackets. Now obviously you can’t just switch ‘em around, because that would give you a different answer. Like 1-2 is not the same as 2-1. Right?  

Now normally I’d just leave it... but I really want to switch ‘em around. So, I will do so, and then put a negative sign outside: 

<div class="eqn"> \[
    \frac{dH}{dt} = \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu'} - p_{\nu}) \ln p_{\nu'}
\] </div>

So now we have the <span class="definition" data-definition="\[ \frac{dH}{dt} = - \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu'} - p_\nu) \ln p_\nu \]">original equation</span>, and this new and improved <span class="definition" data-definition="\[ \frac{dH}{dt} = \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu'} - p_{\nu}) \ln p_{\nu'} \]">genetically modified version</span>. (*BTW if you are struggling to tell the difference, the original equation has a minus sign at the front, and the probability after the \\( \ln \\) is \\(p_\nu\\) instead of \\(p_{\nu'}\\) like in the genetically modified version. I got a little bit confused typing this, so just thought I'd clarify it for y'all :P*) 

So, we can add them together: 

<div class="eqn"> \[
    2\frac{dH}{dt} = \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu'} - p_\nu) (\ln p_{\nu'} - \ln p_\nu)
\] </div>

Then just halve it to get: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dH}{dt} = \frac12 \sum_{\nu, \nu'} T_{\nu' \to \nu} (p_{\nu'} - p_\nu) (\ln p_{\nu'} - \ln p_\nu) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Cool formula, ey? But why is this helpful, you ask? I’ll bloody tell you why m8! Look at the terms in the parentheses 

- If the probability of a prime is *larger than* the probability of a neo, then the first bracket is positive. And since logarithms only increase, that means the other bracket is also positive, *meaning the product of the 2 brackets is positive*
- If the probability of a prime is lower than the probability of a neo, then the first bracket is negative, and so is the other bracket, *meaning the product of the 2 brackets is positive*
- In the boring and trivial case they are both the same, then *both brackets are zero*, meaning *the product of the 2 brackets is zero*. 

That means, in the end, the rate of change of H can only ever be more than zero: 


<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dH}{dt} \geq 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

This proves that entropy will only ever increase for a closed system until the probabilities are the same. 
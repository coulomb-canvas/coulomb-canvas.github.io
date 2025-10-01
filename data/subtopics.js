

const subtopics = {
  "welcome-intro": {
    content: `

    <p>Hi there!</p>
    <p>Welcome to Coulomb Academy!</p>

    <h3>What exactly am I here to do?</h3>
    <p>I am a second year student at the University of Warwick, and I am studying (believe it or not) physics for my
      undergrad. I have a notably quite novel way of explaining things, and therefore I felt like making this website
      to help people who are also studying physics.
    </p>

    <p>Firstly, everything I do is based off my lecture notes from my specific university. I would imagine that different
      universities have different curricula, use different convensions, and assess different things. Therefore, unless you
      attend Warwick Uni, the stuff here is probably gonna vary from what you do at your own uni. Not that you can't use my
      stuff at all, just be careful, init?
    </p>
    <p>Secondly, even if you do go Warwick Uni, bare in mind that, as great and amazing as I am, I am a fallible human just
      like you. Anything I portray here very well may have errors, and whereas I can change errors in the typed content, simply
      by entering the HTML and changing what I typed, it may take a bit longer to do that with images, and I'm quite lazy so,
      yeah, look out for that, k?
    </p>
    <p>And finally, and most importantly, even if you have the same curriculum as me and I manage to make zero mistakes, this
      website is NOT a replacement for actually doing university. Bro, go to your flipping lectures, go to your problem classes,
      do your assignments! The goal of this website is to give you a unique way of looking at things, like if you have already
      studied something and still don't understand, that's where this degenerate website comes in. Not for you to come in last
      minute because you didn't study.
    </p>
    <p>However, if you didn't study, and you are here, you're welcome too, and I hope I can still be of assistance!</p>
    <p>In this so called welcome ceremony, I will teach you all the features of this website, so that you can have the best
      time possible. Iku ze!
    </p> `
  },
  "features": {
    content: `

    <p>If you look any of the topics, you'll see 3 main features</p>

    // Picture of this subtopic with everything

    Naturally, these are intended to give you an idea about what's to come up before you actually look into it

    <p>First up, you've got the title. Pretty self-explanatory.</p>
    <p>Underneath it (or above it in the case of the introductions and conclusions), you have a little comment about the
    topic at hand. This can be anything from a description of what's going on to an arbitrary reference which is vaguely
    related, to something completely random which is only relevant by some colourful interpretation. And ff I'm completely 
    honest, it's pretty much there to fill space. If anything, you can use it as a fun way to remember the topic in 
    question, by trying to figure out their relevance.</p>
    <p>Then in the triangle to the left of all this, there's the picture. Or there might be. I'm typing this before I can
    be bothered to add them, so it might just be a big orange (or red) triangle. Just know it's supposed to have an image
    in it </p>

    <h3>The subtopics</h3>
    
    <p>Next to the title and silly comment, you'll see one of four ratings:

    // Four ratings image

    This is also quite self-explanatory: a rating of how hard I think the subject at hand is.

    </p>

    <p>
    Next to it, there is a rating from 1 to 10. What does this symbolise? It's a way for you to know where the difficulty
    lies in a particular subject. A rating of 10 means that the subject is only difficult because it requires you to
    follow a lot of maths, rather than the subject being difficult itself. A rating of one is of course the opposite,
    meaning the maths isn't something you are likely to struggle with.
    </p>
    <p>  Now let me be clear: this isn't (intended to be) a rating of how much maths there is, but rather how difficult the 
    maths is when compared to the actual content. A subject with a rating of 1 doesn't mean there is no maths, but that 
    the maths isn't something to worry about in terms of difficulty. 10 also doesn't mean it is exclusively maths, but
    that the content isn't something to worry about in terms of difficulty.
    </p>
    <p>    However, both the difficulty and the maths rating are subjective, so take with a pinch of salt
    </p> 
    <p> Once you are on a subtopic, you will see a few things too</p>
    <p> At the top you will see the title, below which you'll see the 'Back to Topics' and 'Back to "Subtopic"' buttons.
    I can't lie, I'm wasting my time typing this, ain't it obvious what they do?</p>
    <p> On the very top right, you will see a grey square with what could be interpreted as the chinese symbol for three.
    But it's not. It represents a list. And if you click said list, you will get a list of all the subsections within the
    topic. You can click whatever subsection you want to go to, and it will take you straight there</p>S

    `
  },

  "features2": {
    content: `
     <p>First, we have these light blue underlined links. These will point out key definitions which you should learn. 
     Hovering over them will reveal the deininition.</p>
     <p>If you know anything about physics, you'd know that there are a lot of formulae. At first, they may seem
     random, but once you see the derivations, you realise that they do make sense. Slight problem though... some 
     of these derivations are a <em>pain</em> in the arse. Others are significantly less painful, but not necessary
     for you to know. In either case, if there is a derivation which I think you could probably do without, I will
     put an orange link like this. Clicking this will give you the derivation</p>
     <p>Next, the images are contained within these 
    `
  },

  // Subtopics for Maths for
  "complex-numbers": {
    title: `Complex Numbers`,
    content: `
      <h3>The imaginary number</h3>

      <p>Hi there. Here's an equation. You are required by law to solve it now.

      <p>\\( x^2 + 1 = 0 \\)</p>

      <p>Well then, don't just stand (sit?) there, solve it you pillock.</p>
      <p>Excuse me? On about "I cAn'T sOlVe ThIs", it's just basic algebra, and you're telling me you can't solve it? 
      Are you sure you are supposed to be doing university level physics? Flipping hell, man, just give it to me, I'll
      bloody do it then...</p>

      <p> Right, so we've got \\( x^2 + 1 = 0 \\), and we wanna know what \\(x\\) is, so of course we subtract both
      sides by one to get \\(x^2 = -1\\), then we square root both sides, now we've got \\(x=\\)...\\(±\\sqrt{-1}\\)?
      Well that's not possi... I mean, yeah, this is easy!</p>
      <p> *In Yugi Muto voice* This is bad, I told them the equation was basic, but now I can't solve it myself. The
      answer is of course \\(-1\\), but that doesn't exist! If I don't do something soon, my ego is gonna take a 
      major hit... </p>
      <p> *In Yami Yugi voice* Don't worry, Yugi, I have an idea. I... will cheat!!!</p>
      <p> And the answer is now \\(±\\sqrt{-1}\\), which is equal to \\(±i\\)!

      <p>Yep, that's it! Contrary to what that little drama would suggest, this isn't something Yami Yugi pulled out
      of his arsehole during Duelist Kingdom. Mathematicians needed something to represent the square root of 
      minus 1, and so they created one, and called it \\( i \\). For imaginary. The number is literally a figment
      of their imagination for flips sake...</p>

      <p>\\( i^2 = -1 \\)</p>

      <p>This number was pretty much spawned out of necessity. We're reaching the point in time where we kinda just do
      things for the sake of doing them, and worry about how useful it is later. Although, to be fair, in this particular
      case, this imaginary number <em>is</em> extremely useful.</p>

      <h3>What Is a Complex Number?</h3>

      <p>A complex number has two parts:</p>

      <p>\\( z = x + iy \\)</p>

      <p>Where \\( x \\) and \\( y \\) are real numbers.</p>

      <ul>
        <li>\\( x \\) = real part</li>
        <li>\\( y \\) = imaginary part</li>
      </ul>

      <p>So some examples of complex numbers would be \\(3+4i\\), \\(2-7i\\), \\(1+i\\) and so on. And, by the way, even
      numbers like 3, 7 and 15 are still complex numbers. In their case, \\( y = 0 \\). The same is true of purely
      imaginary numbers like 2i, -3i or 9i. In their case, \\( x = 0 \\)?..</p>

      <p>So real numbers are just a subset of complex numbers. Like how a square is a rectangle, but not vice versa.</p>

      <h3>The Complex Plane</h3>

      <p>We can plot complex numbers on a plane — the <strong>Argand diagram</strong>.</p>

      <p>The Argand diagram is a lot like a normal x-y graph, but used to plot complex numbers. The real part goes on 
      the \\( x \\)-axis, and the imaginary part goes on the \\( y \\)-axis. So \\( z = x + iy \\) becomes the point 
      \\( (x, y) \\).</p>

      <h3>Modulus and Argument: The Polar Form</h3>

      <p>The benefit of using these Argand diagrams is that it allows us to consider other things. Instead of \\( x \\) 
      and \\( y \\), we can use the distance of the co-ordinate from the origin and the angle from the positive
      x axis</p>
      <ul>
        <li><strong>Modulus</strong> \\( r \\): distance from origin → \\( r = \\sqrt{x^2 + y^2} \\)</li>
        <li><strong>Argument</strong> \\( \\theta \\): angle from positive \\( x \\)-axis → \\( \\tan\\theta = y/x \\)</li>
      </ul>

      <p>Then:</p>

      <p>\\( z = r(\\cos\\theta + i\\sin\\theta) \\)</p>

      <p>But here’s the magic:</p>

      <p>\\( \\cos\\theta + i\\sin\\theta = e^{i\\theta} \\)</p>

      <p>So we can write:</p>

      <p>\\( z = re^{i\\theta} \\)</p>

      <p>This is the <strong>polar form</strong> — and it makes multiplication, division, and powers *so much easier*.</p>

      <h3>Euler’s Formula</h3>

      <p>When \\( \\theta = \\pi \\), we get:</p>

      <p>\\( e^{i\\pi} + 1 = 0 \\)</p>

      <p>It links five fundamental constants: \\( e \\), \\( i \\), \\( \\pi \\), 1, and 0.</p>

      <p>And it’s stunning.</p>

      <p>No wonder people say it’s the most beautiful equation in mathematics.</p>

      <h3>De Moivre’s Theorem: Powers Made Easy</h3>

      <p>Now, what’s \\( z^n \\)?</p>

      <p>If \\( z = re^{i\\theta} \\), then:</p>

      <p>\\( z^n = r^n e^{in\\theta} = r^n (\\cos n\\theta + i\\sin n\\theta) \\)</p>

      <p>This is <strong>De Moivre’s Theorem</strong> — and it’s your best friend for finding powers and roots.</p>

      <p>Example: solve \\( z^3 = 1 \\)</p>

      <p>Write \\( z = e^{i\\theta} \\), so \\( z^3 = e^{i3\\theta} = 1 \\)</p>

      <p>Then \\( 3\\theta = 0, 2\\pi, 4\\pi \\) → \\( \\theta = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3} \\)</p>

      <p>So the three cube roots of unity are:</p>
      <ul>
        <li>\\( z_1 = 1 \\)</li>
        <li>\\( z_2 = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2} \\)</li>
        <li>\\( z_3 = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2} \\)</li>
      </ul>

      <p>They form an equilateral triangle on the unit circle. Neat.</p>

      <h3>Complex Conjugate: The Mirror Image</h3>

      <p>For \\( z = x + iy \\), the conjugate is:</p>

      <p>\\( \\bar{z} = x - iy \\)</p>

      <p>On the Argand diagram, it’s the reflection across the real axis.</p>

      <p>And it’s useful because:</p>

      <p>\\( z\\bar{z} = x^2 + y^2 = |z|^2 \\)</p>

      <p>Which is real. And positive. And helpful.</p>

      <h3>Why Are Complex Numbers Useful?</h3>

      <p>Because they’re not just for solving \\( x^2 = -1 \\).</p>

      <p>They’re used in:</p>
      <ul>
        <li><strong>AC circuits</strong>: impedance, phase, resonance</li>
        <li><strong>Waves</strong>: complex exponentials make interference and beats easier</li>
        <li><strong>Quantum mechanics</strong>: the wavefunction is complex</li>
        <li><strong>Signal processing</strong>: Fourier transforms</li>
      </ul>

      <p>So yes — they’re “imaginary.”</p>

      <p>But they’re also <strong>incredibly real in their applications</strong>.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>\\( i^2 = -1 \\)</li>
        <li>Complex number: \\( z = x + iy \\)</li>
        <li>Modulus: \\( |z| = \\sqrt{x^2 + y^2} \\)</li>
        <li>Argument: \\( \\theta = \\tan^{-1}(y/x) \\)</li>
        <li>Polar form: \\( z = re^{i\\theta} \\)</li>
        <li>Euler’s formula: \\( e^{i\\theta} = \\cos\\theta + i\\sin\\theta \\)</li>
        <li>De Moivre: \\( (\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta \\)</li>
        <li>Conjugate: \\( \\bar{z} = x - iy \\)</li>
        <li>Roots of unity form regular polygons</li>
      </ul>

      <p>And remember: the universe doesn’t care if you think \\( i \\) is fake.  
      It only cares if the math works.</p>
    `
  },
  "vectors": {
    title: "Vectors",
    content: `
      <h3>Vectors</h3>

      <p>Normally a number only has a magnitude. For example, the number “7” tells us how much we have, but it doesn’t 
      point anywhere. Even if I say, “7 metres”, is that 7m north? South? Forwards? Who knows? <strong>Vectors</strong> 
      are special quantities which have both magnitude <em>and</em> direction. So, for instance, we could say 7m in the 
      \\(x\\)-direction.</p>

      <h3>Vector Notation Methods</h3>

      <p>There are quite a few different ways to represent vectors. One of which is to put a kind of arrow over the quantity 
      you are vector-ifying. Like this: <span style="text-decoration: overline;">v</span></p>

      <p>This was my favourite way to do it at first, simply because I have a severe vanity problem and the arrow looks 
      the most novel. But you’ll soon come to realise that drawing the little arrow each time is quite time consuming in 
      the long run, so I don’t recommend it.</p>

      <p>The next method is to write the variable in <strong>bold font</strong>, like this: <strong>v</strong></p>

      <p>This is also pretty nifty, although slight problem... no-one can consistently write in bold font. If you don’t 
      make it obvious that this is supposed to be a bold fonted vector, your examiner might not be able to tell the 
      difference, and therefore you might just lose yourself a few marks. And it’s even more time consuming than the 
      previous method, so this is just an L take.</p>

      <p>This leaves the final method: <u>underlining</u> the variable we want to vector-ify. And as boring as this is, 
      when writing, this is probably the most sensible method.</p>

      <p>Having said that, I am not writing — I am typing — and therefore using the novel arrow is exactly what I’m 
      gonna do. A, because they look cool, and B because it is the most obviously vector-ification method. So, get used 
      to that. And as a matter of fact, I might throw in some of the other methods too just to toy with you, so that you 
      get used to all of them.</p>

      <p>You may be thinking, “Why does the notation even matter? Can’t I just write \\(v\\) as normal?”</p>

      <p>And the answer is, yes you can. I mean, you have free will, don’t you? You can do what you want. However, 
      if you want to be precise (and if you want to get marks on your examination), you will have to use one of these 
      methods. Just using the variable without any vector notation will give you the magnitude of the vector, but not 
      the direction. So, in the example I gave you before, if <span style="text-decoration: overline;">v</span> is 
      “7m in the <em>x</em>-direction", then <em>v</em> on its own is just the number 7. You might not think it 
      matters now, but don’t worry, you’ll realise how important it is soon enough.</p>

      <h2>Unit Vectors</h2>

      <p>NEway, there is one more type of vector we must learn about: the <strong>unit vector</strong>. This is how we 
      describe the direction of the vector with respect to its magnitude. These are represented with a circumflex, or 
      what everyone else, including bloody LaTeX, insists is a little hat over the vector quantity. For example, 
      7<strong>î</strong> is 7 units in the <em>x</em>-direction. This means that any vector can be written as a 
      combination of its magnitude and a unit vector:</p>

      <p><strong>v</strong> = |<strong>v</strong>| <strong>û</strong></p>

      <p>And an annoying little thing for you to get used to: for some unknown reason, instead of using <em>x</em>, 
      <em>y</em> and <em>z</em>, which is the normal thing to do, mathematicians decided to use <strong>î</strong>, 
      <strong>ĵ</strong>, and <strong>k̂</strong>. Dunno why, they just did.</p>

      <h3>Vector Operations</h3>

      <h4>Addition and Subtraction</h4>
      <p>Addition and subtraction are exactly what you’d imagine: add or subtract each <strong>î</strong>, 
      <strong>ĵ</strong> and <strong>k̂</strong> to get a resultant vector.</p>

      <h4>Multiplication</h4>
      <p>Multiplication is where this gets a bit trickier, because there are two types. We’ll begin with what I 
      think is the easiest one: the <strong>dot product</strong>.</p>

      <p>The dot product is represented by a little dot (hence the name) between the two vectors. In order to 
      calculate it, you multiply the <strong>î</strong>'s, multiply the <strong>ĵ</strong>’s, and multiply the 
      <strong>k̂</strong>’s, before adding them all together. This means that the result of a dot product between 
      two vectors is actually a <em>scalar</em>.</p>

      <p>The <strong>vector product</strong>, more commonly known as the <strong>cross product</strong>, is represented 
      by a cross (wow, which genius is coming up with these names?) between the two vectors.</p>

      <h3>Coordinate Systems</h3>

      <h4>Cartesian Coordinates</h4>
      <p>Cartesian co-ordinates are the ones you have been using all this while, with <em>x</em>, <em>y</em> and 
      <em>z</em> (just kidding, it’s <strong>î</strong>, <strong>ĵ</strong>, and <strong>k̂</strong> now, remember?). 
      If you really must, you can write the basis vectors out (in column form):</p>

      <pre>
  <strong>î</strong> = [1, 0, 0]<sup>T</sup>
  <strong>ĵ</strong> = [0, 1, 0]<sup>T</sup>
  <strong>k̂</strong> = [0, 0, 1]<sup>T</sup>
      </pre>

      <h4>Polar Coordinates</h4>
      <p>Polar co-ordinates are more convenient for systems which have circular symmetry. Instead of just stating how 
      far along the <em>x</em> or <em>y</em> axis a point is, we can describe a point by its distance from the origin 
      and the angle that it makes with the positive <em>x</em>-axis. You can also nicely switch between Cartesian and 
      polar co-ordinates using these juicy transformations:</p>

      <p><em>x</em> = <em>r</em> cos(θ)<br>
      <em>y</em> = <em>r</em> sin(θ)<br>
      <em>r</em> = √(<em>x</em>² + <em>y</em>²)<br>
      θ = tan⁻¹(<em>y</em>/<em>x</em>)</p>

      <h4>Spherical Coordinates</h4>
      <p>Spherical co-ordinates are more convenient for systems which have spherical symmetry. It’s fundamentally 
      identical to polar and cylindrical co-ordinates, but now we have two angles to worry about.</p>
    `
  
  },
  "odes": {
    title: "First Order ODES",
    content: `
        <h3>Ordinary Differential Equations (ODEs)</h3>
        <p>An <strong>ODE (ordinary differential equation)</strong> is an equation involving only ordinary
        derivatives, and no partial derivatives. What’s a partial derivative you ask? If you don’t
        know what they are, then <em>don’t worry too much</em>.</p>
        <p>When we are dealing with a system which changes over time, we are practically guaranteed to be
        dealing with a differential equation of some sort. So we can’t avoid them. In which case,
        better get used to ‘em now!</p>
        <p>The <strong>order</strong> of a differential equation is the order of the highest derivative. So
        for example, if we have:</p>
        \\[ \\frac{d^2y}{dx^2} + 5\\frac{dy}{dx} + 6y = 0 \\]
        <p>Then this is a <strong>second order</strong> differential equation, because we have a \\(d^2\\) term.</p>
        <p>These equations have two types of solutions:</p>
        <p>A <strong>general solution</strong> is (funnily enough) the most general form of the solution we can
        get from a differential equation. This means that we don’t have any specific answer. To give a
        kinda example, if we had an equation \\(y - x^2 = 4\\), we could get the value of \\(x\\) by
        simply rearranging: \\(x = \\pm\\sqrt{y-4}\\). But \\(\\pm\\sqrt{y-4}\\) isn’t a number. It just
        shows us how we could calculate \\(x\\) for any given \\(y\\).</p>
        <p>A <strong>particular solution</strong> is what happens if we impose some <strong>boundary
        conditions</strong> to get a specific answer for this scenario. Going back to our \\(y-x^2=4\\)
        example, if I imposed the boundary conditions of \\(y=8\\) and \\(x>0\\), we now know for a
        fact that \\(x=2\\). This would be the particular solution for these conditions.</p>

        <h3>The Simplistic Method</h3>
        <p>If our equation involves differentiation, just integrate both sides to get the answer back.</p>

        <h3>Separation of Variables</h3>
        <p>However, as you are probably aware, life isn’t usually that easy. You’ll find that simply
        integrating both sides doesn’t usually work. Especially when you have an equation which uses
        different variables or derivatives of different orders. But never fear!</p>
        <p><strong>Separation of variables</strong> is a technique which involves treating the differential
        like it’s an actual fraction, as in \\(dy\\) divided by \\(dx\\). In which case, you just collect
        like terms onto each side of the equation via division and multiplication. For example, with
        \\( \\frac{dy}{dx} = \\frac{x^2}{y} \\), you can rearrange it.</p>
        \\[ y \\, dy = x^2 \\, dx \\]
        <p>Now we have an equation which we can integrate both sides of like before:</p>
        \\[ \\int y \\, dy = \\int x^2 \\, dx \\implies \\frac{1}{2}y^2 = \\frac{1}{3}x^3 + C \\]
        <p><em>“Hang on, treat it like a fraction? What do you mean, treat it like a fraction? Isn’t that
        exactly what it is?”</em> I hear you ask. Well, according to my flatmates who study mathematics,
        differentials are not exactly fractions, and therefore using this moving terms around method is,
        quote, “a gross abuse of notation.” Having said that, I do physics, not maths. Hence, I do not
        care about abusing notation, we only care about results. Heck, why stop at abuse, I’ll kidnap,
        defame and murder the notation, if the answer is correct then we’re good to go m8.</p>

        <h3>Substitution</h3>
        <p>What about an equation like this:</p>
        \\[ \\frac{dy}{dx} = \\frac{y}{x} + (\\frac{y}{x})^2 \\]
        <p>I can’t help but notice that there is a recurring theme on the right-hand side of the
        equation: \\(y/x\\) seems to feature a lot. In that case, we can replace \\(y/x\\) with another
        variable. Let’s take... \\(z\\)! So let \\( z = \\frac{y}{x} \\). Subbing that into the equation we get:</p>
        \\[ \\frac{dy}{dx} = z + z^2 \\]
        <p>This is looking a bit more manageable, except for one problem: we now have three variables,
        an \\(x\\), a \\(y\\) and a \\(z\\). If we wanna solve this equation, we can only have two variables.</p>
        <p>Oh, I know! Since we made \\(z\\) by replacing \\(y/x\\), we rearrange that to get \\(y=xz\\). Now
        we can replace the \\(y\\) in the differential, giving us:</p>
        \\[ \\frac{d(xz)}{dx} = z + z^2 \\]
        <p>A bit better, now to deal with the differential. Since this is a product of two x-dependent
        things, \\(z(x)\\) and \\(x\\), we can use the <strong>product rule</strong> to differentiate it. That
        leaves us with:</p>
        \\[ \\frac{d(xz)}{dx} = x\\frac{dz}{dx} + z \\]
        <p>Substitute it into the equation, and we get:</p>
        \\[ x\\frac{dz}{dx} + z = z + z^2 \\implies x\\frac{dz}{dx} = z^2 \\]
        <p>Now we can use the ‘separation of variables’ method, which gives us:</p>
        \\[ \\frac{1}{z^2} dz = \\frac{1}{x} dx \\implies -\\frac{1}{z} = \\ln|x| + C \\]
        <p>You might wonder, “when can I use substitution?” My answer... figure it out. In my opinion,
        the hardest part of any mathematics is not the techniques themselves but figuring out when to
        use them. And that just requires practice.</p>

        <h3>Integrating Factor</h3>
        <p>Now what if we have an equation which is in this form:</p>
        \\[ \\frac{dy}{dx} + P(x)y = Q(x) \\]
        <p>Woah woah woah, that’s a bloody arbitrary form for an equation to be in, isn’t it?</p>
        <p>Yes, I agree, but it’s actually quite common (in exams anyway...). Now how do we solve this?
        We use something called the <strong>integrating factor</strong>, \\(R(x)\\), which is:</p>
        \\[ R(x) = e^{\\int P(x)dx} \\]
        <p>We multiply each term of the equation by the integrating factor. The left-hand side is just
        the differential of \\(R(x)y\\)! That means you can rewrite the equation as so:</p>
        \\[ \\frac{d}{dx}(R(x)y) = R(x)Q(x) \\]
        <p>And then integrate both sides to get the answer as so:</p>
        \\[ R(x)y = \\int R(x)Q(x)dx \\]

        <h3>Second Order Homogeneous ODE</h3>
        <p>We can treat the differential equation like it’s a normal quadratic equation. Remove the
        \\(y\\)’s, replace the first differentials with an \\(m\\), and replace the second differentials
        with an \\(m^2\\). So for instance:</p>
        \\[ a\\frac{d^2y}{dx^2} + b\\frac{dy}{dx} + cy = 0 \\quad \\rightarrow \\quad am^2 + bm + c = 0 \\]
        <p>Anyway, now that we’ve replaced the \\(m\\)’s, solve it like a quadratic equation, which
        will normally give you two results, say \\(m_1\\) and \\(m_2\\). This means the solution to the
        second order ODE is then:</p>
        \\[ y(x) = Ae^{m_1x} + Be^{m_2x} \\]
        <p>One additional consideration, what about the one in a billion chance where we have
        <strong>repeated roots</strong>? Repeated roots are what happens when you solve a quadratic
        equation and end up with two of the same answer, \\(m_1 = m_2 = m\\).</p>
        <p>For some strange reason, when you get repeated roots, you end up multiplying one of the
        constants by \\(x\\), giving you:</p>
        \\[ y(x) = Ae^{mx} + Bxe^{mx} = (A+Bx)e^{mx} \\]

      <h3>TL;DR</h3>

      <ul>
        <li>First-order ODE: \\( dy/dx = f(x,y) \\)</li>
        <li>Separation of variables: \\( dy/h(y) = g(x) dx \\)</li>
        <li>Integrating factor: \\( \\mu(x) = e^{\\int P(x) dx} \\)</li>
        <li>Use it for linear ODEs: \\( dy/dx + P(x)y = Q(x) \\)</li>
        <li>Substitution can make non-separable equations separable</li>
        <li>Coupled ODEs describe interacting systems (e.g. predator-prey)</li>
      </ul>

      <p>And remember: the universe doesn’t care how confused you are.  
      It only cares about the derivative.</p>
    `
  
  },
  "series": {
    title: "Series",
    content: `
      <p>
          So, picture the scene. You're deep into a physics problem, everything's going 
          great, and then <strong>BAM</strong>. You get hit with some god-awful 
          function. A <em>sin(x)</em>, a <em>ln(x)</em>, something properly nasty. 
          Trying to actually solve anything with it is a complete nightmare. 
      </p>
      <p>
          What if you could just... not? What if you could swap that horrible function 
          out for a nice, simple polynomial that's <em>basically</em> the same thing? 
          Well, believe it or not, you can do just that! This beautiful little cheat 
          code is called a <strong>Taylor Series</strong>. 
      </p>
      <p>
          You've probably been told a million times that for a pendulum with a small 
          swing, \\(\\sin{\\theta} \\approx \\theta\\). But why can we just do that? 
          Doesn’t it seem a bit strange? I mean, it works, but it feels a bit 
          suspicious, no? 
      </p>
      <p>
          Well finally, we get an explanation. Turns out, for any function, f(x), we 
          can rewrite it as an infinite polynomial around some point \\(x=a\\). We're 
          gonna have to trust that this works, because the proof is a bit clunky. 
      </p>
      <p>
          \\(f(x) = A_0 + A_1(x-a) + A_2(x-a)^2 + A_3(x-a)^3 + \\dots\\) 
      </p>
      <p>
          We just need to find the coefficients. And don't worry, there's a dead 
          simple pattern. 
      </p>
      <ul>
          <li>
              Plug in \\(x=a\\). This makes all the terms with an  \\( (x-a) \\) 
              disappear. So \\(A_0 = f(a)\\). 
          </li>
          <li>
              Differentiate the whole thing once, <em>then</em> plug in \\(x=a\\). 
              Everything disappears again except for one term. You're left with 
              \\(A_1 = f'(a)\\). 
          </li>
          <li>
              Do it again and you get \\(A_2 = f''(a)/2!\\). 
          </li>
      </ul>
      <p>
          You get the picture. There's a long-ass derivation for the rest of them, but 
          let me just save you the effort. The final formula is this beauty: 
      </p>
      <p>
          \\(f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n\\) 
      </p>
      <p>
          Most of the time, you'll be doing this around \\(a=0\\), which makes life 
          easier. This special case is called a <strong>Maclaurin Series</strong>. 
      </p>
      <p>
          Right, let's go back to that pesky <em>sin(x)</em> and do a Maclaurin series 
          (\\(a=0\\)). First, the derivatives at 0: 
      </p>
      <ul>
          <li>
              \\(f(0) = \\sin{0} = 0\\) 
          </li>
          <li>
              \\(f'(0) = \\cos{0} = 1\\) 
          </li>
          <li>
              \\(f''(0) = -\\sin{0} = 0\\) 
          </li>
          <li>
              \\(f'''(0) = -\\cos{0} = -1\\) 
          </li>
      </ul>
      <p>
          And so on. Plug that into the formula, and after all the zero terms vanish, 
          you're left with this: 
      </p>
      <p>
          \\(sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\dots\\) 
      </p>
      <p>
          And there you have it! Look at that very first term. For small angles, the 
          \\(x^3\\) and \\(x^5\\) terms are so tiny they're basically irrelevant. So you 
          can just say \\(\\sin{x} \\approx x\\). It's not magic, it's just being lazy and 
          ignoring the small stuff. 
      </p>
      <h3>
          Tests of Convergence 
      </h3>
      <p>
          This infinite series thing is great, but only if the terms add up to a 
          proper number. If they get smaller and settle on a value, we say the series 
          <strong>converges</strong>. If they just get bigger and fly off to 
          infinity, it <strong>diverges</strong>, and it's completely useless to us. 
      </p>
      <p>
          How do we figure this out? By playing a little game, of course! There are a 
          few tests we can use to see if an infinite series converges to a certain 
          value. but let's be honest, the <strong>Ratio Test</strong> is the one 
          you'll probably use the most. For a series \\(\\sum a_n\\), you just calculate 
          this limit: 
      </p>
      <h4>
          Test 1: Preliminary Test 
      </h4>
      <p>
          Here’s a quick and easy (and pretty crap tbh) way to tell if a series doesn’t 
          converge. If you substitute the n in the equation with infinity. If the 
          answer isn’t 0, then it definitely doesn’t converge. Having said that, if it 
          does equal 0, that also doesn’t mean it will converge, so in 90% of cases 
          this is actually a bit of a waste of time. However, 10% is a lot of 
          percents, so there’s that I guess. 
      </p>
      <h4>
          Test 2: Comparison Test 
      </h4>
      <p>
          This next one is also quite simple. If he had some other series, 
          \\(\\sum^\\infty_{n=1} b_n\\) and we know that series converges, then if all 
          the terms in our first series are smaller that them (i.e. all of the a_n 
          terms are less than or equal to their corresponding b_n terms) then the a_n 
          series will also converge 
      </p>
      <h4>
          Test 3: The Ratio Test 
      </h4>
      <p>
          \\(k = \\lim_{n\\to\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|\\) 
      </p>
      <p>
          The rules are pretty chill: 
      </p>
      <ul>
          <li>
              If \\(k < 1\\), it <strong>converges</strong>. You're golden. 
          </li>
          <li>
              If \\(k > 1\\), it <strong>diverges</strong>. Get it out of here. 
          </li>
          <li>
              If \\(k = 1\\), the test is inconclusive. Which is bloody annoying, 'cus 
              it means you have to do more work. 
          </li>
      </ul>
      <h4>
          Test 4: Alternating Series Test 
      </h4>
      <p>
          This is the final test, so if this also doesn’t work... then let’s be real 
          you’ve done something wrong, go back to the beginning and start again you 
          bimp. 
      </p>
      <p>
          If our series \\(\\sum^\\infty_{n=1} a_n\\) consists of terms with alternating 
          signs: 
      </p>
      <p>
          ...and each term is decreasing in value, such that the infinitieth term 
          would be zero: 
      </p>
      <p>
          ...then it does converge. 
      </p>

      <h3>TL;DR</h3>

      <ul>
        <li>Taylor series: \\( f(x) = \\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n \\)</li>
        <li>Maclaurin: \\( a = 0 \\)</li>
        <li>\\( e^x = 1 + x + x^2/2! + \\cdots \\)</li>
        <li>\\( \\sin x = x - x^3/3! + \\cdots \\)</li>
        <li>\\( \\cos x = 1 - x^2/2! + \\cdots \\)</li>
        <li>\\( \\sinh x \\), \\( \\cosh x \\): no alternating signs</li>
        <li>Use ratio test for convergence: \\( L = \\lim |a_{n+1}/a_n| \\)</li>
        <li>Harmonic series diverges → infinite block overhang</li>
      </ul>

      <p>And remember: the universe doesn’t care how many terms you use.  
      It only cares if the series converges.</p>
    `
  
  },
  "multivariable": {
    title: "Multivariable Calculus",
    content: `
      <h3>Multivariable Calculus: Slopes in 3D</h3>
      <p>
          By now, you’re probably familiar with \\(f(x)\\). This refers to a function which depends only on a 
          variable, x. But let's be honest, nearly all physical quantities depend on more than one thing. 
          The pressure of a gas depends on its volume and temperature, \\(P(V,T))\\), and the vibe of a 
          wave depends on both position and time, \\(U(x,t)\\).
      </p>
      <p>
          So, we need to upgrade our calculus.
      </p>

      <h4>Partial Derivatives</h4>
      <p>
          First things first, how do you even differentiate a function of two variables, like <em>f(x, y)</em>?
      </p>
      <p>
          Imagine you're standing on a hillside. Your height is a function of your east-west position (x) 
          and your north-south position (y). A <strong>partial derivative</strong> is like asking, "How steep is 
          it if I <em>only</em> walk east?".
      </p>
      <p>
          To calculate it, you just differentiate with respect to one variable (say, <em>x</em>) and you treat all 
          the other variables (in this case, <em>y</em>) as if they're just boring old constants. Simple as that. 
          The symbol for this is \\(\\partial\\), so you don't get it mixed up with the normal <em>d</em> derivative.
      </p>

      <h4>Maxima, Minima, and Saddlepoints</h4>
      <p>
          Remember in 1D calculus, where you'd find the "critical points" (the interesting bits) by setting 
          the derivative \\(df/dx = 0\\)? Well, we're doing the exact same thing here. We're looking for the 
          flat spots on our 3D surface. The only difference is, for a point to be truly flat, the slope 
          in <em>every</em> direction must be zero. So, you have to find the points <em>(x, y)</em> where 
          <em>all</em> the partial derivatives are zero at the same time.
      </p>
      <p>
          However in 3D, a flat spot isn't just a peak (a <strong>local maximum</strong>) or a valley (a 
          <strong>local minimum</strong>). You can also get a <strong>saddle point</strong>. Think of a Pringles 
          chip – from one direction it looks like a minimum, but from another direction it looks like a 
          maximum. In fact, they are called saddle points, because they look like saddles on a horse.
      </p>
      <p>
          So, you've found a flat spot. How do you know if it's a peak, a valley, or a horse? There's a test 
          for it, of course. You calculate all the second-order partial derivatives (\\(f_{xx}\\), \\(f_{yy}\\), 
          \\(f_{xy}\\)) and plug them into this magic number:
      </p>
      <p>
          \\(\\Delta = f_{xx} f_{yy} - (f_{xy})^2\\)
      </p>
      <p>
          Which, my mathematician friends pointed out, is the same of finding the determinant of this matrix.
      </p>
      <p>
          The rules are simple:
      </p>
      <ul>
          <li>If <strong>\\(\\Delta > 0\\)</strong> and <strong>\\(f_{xx} > 0\\)</strong>, you've found a 
          <strong>local minimum</strong>.</li>
          <li>If <strong>\\(\\Delta > 0\\)</strong> and <strong>\\(f_{xx} < 0\\)</strong>, you've found a 
          <strong>local maximum</strong>.</li>
          <li>If <strong>\\(\\Delta < 0\\)</strong>, you've found a <strong>saddle point</strong>.</li>
          <li>If <strong>\\(\\Delta = 0\\)</strong>, the test is inconclusive, which is bloody annoying 
          'cus it means you have to do more work.</li>
      </ul>

      <h4>Why the Test Works</h4>
      <p>
          Now I know what you are thinking (or at least what I’ve been thinking for quite a while, and only 
          just recently actually got an answer to): “mate, \\(\\Delta = f_{xx} f_{yy} - (f_{xy})^2\\)? That’s sooo 
          bloody random, how the hell am I supposed to remember this?”
      </p>
      <p>
          We know already that if we want to know whether a certain stationary point, call it \\(x_0\\), is a 
          local minimum or a local maximum, we differentiate \\(f(x)\\) twice. If the value of \\(f''(x_0)\\) 
          is positive, then we have a local minimum. However, if it is negative, then we have a local maximum.
      </p>
      <p>
          Using this reasoning tells us that \\(f_{xx}\\) would tell us whether the point is a maximum or a 
          minimum in the x direction, but this is not enough, because we also have to consider whether or not 
          the point is a maximum or minimum in the y direction. Now think about this carefully, cus if you get 
          it, you get it. If \\(f_{xx}\\) and \\(f_{yy}\\) both have the same symbol (i.e. \\(f_{xx}f_{yy}\\) is 
          positive) that means the change in height is the same in all directions, meaning it's a local 
          minimum or maximum.
      </p>
      <p>
          However, if one is positive and the other is negative (i.e. \\(f_{xx}f_{yy}\\) is negative), then 
          that means it goes up in one direction and down in the other, i.e. a saddle point.
      </p>
      <p>
          If \\(f_{xx}f_{yy}\\) represent the pure curvature of the bowl or hill, \\(f_{xy}\\) can be viewed as a 
          sort of twist. Therefore \\(\\Delta = f_{xx} f_{yy} - (f_{xy})^2\\) is like a kind of contest between 
          these two. Hence if \\(\\Delta\\) ends up being positive, that means the pure curvature is dominant over 
          the twist, giving a bowl / hill shape. If it were negative, the twist element is dominant over the 
          pure curvature, giving it the saddle shape.
      </p>
      <p>
          So, if the pure curve aspect is dominant, and we know this means that the field is either a bowl or a 
          hill. At that point we can use our usual is \\(f_{xx}\\) greater than or less than 0 to decide if it 
          is a local minimum or maximum.
      </p>
      <p>
          This makes sense, trust me.
      </p>

      <h3>The Gradient</h3>
      <p>
          Alright, so partial derivatives are cool and all. They tell you the slope of a surface in the 
          x-direction and the slope in the y-direction. But what if you're standing on a hillside and you 
          just want to know: which way is straight up? What's the steepest possible path to the top? For 
          that, my friend, you need the <strong>gradient</strong>.
      </p>

      <h4>What's a Gradient?</h4>
      <p>
          First up, let's talk about a <strong>scalar field</strong>. It's just a fancy name for a number at every 
          point in space. The temperature in your room is a scalar field. The pressure of the atmosphere is a 
          scalar field. The potential energy around a planet is a scalar field.
      </p>
      <p>
          The gradient is a tool that turns a scalar field (like potential energy) into a <strong>vector field</strong> 
          (like a force).
      </p>
      <p>
          It's just a vector you build by stuffing all the partial derivatives together. Simple as that. For a 
          function <em>f(x, y, z)</em>, the gradient, written as \\(\\nabla f\\), is:
      </p>
      <p>
          \\(\\nabla f = \\frac{\\partial f}{\\partial x}\\hat{i} + \\frac{\\partial f}{\\partial y}\\hat{j} + 
          \\frac{\\partial f}{\\partial z}\\hat{k}\\)
      </p>
      <p>
          This is the important bit. The gradient vector \\(\\nabla f\\) at any point tells you two crucial things:
      </p>
      <ul>
          <li>
              It points in the direction of the <strong>steepest uphill slope</strong>. Always. If you're a hiker 
              who wants to get to the top of a mountain ASAP, you just follow the gradient vector. Its length 
              (magnitude) tells you exactly how steep that path is.
          </li>
          <li>
              It's always <strong>perpendicular</strong> to the contour lines. You know, those lines on a 
              topographic map that show constant height? The gradient vector crosses them at a perfect 
              90-degree angle.
          </li>
      </ul>

      <h4>Why Gradients Matter</h4>
      <p>
          Alright, cool story bro, but what's the actual point? Well, this is one of the most important 
          relationships in all of physics, especially in electromagnetism and gravity.
      </p>
      <p>
          For forces that are "conservative," the force vector <strong>F</strong> is simply the <strong>negative</strong> 
          of the gradient of the potential energy <strong>U</strong>.
      </p>
      <p>
          \\(F = -\\nabla U\\)
      </p>
      <p>
          Think of the potential energy <strong>U</strong> as a hilly landscape. The gradient \\(\nabla U\\) points 
          straight uphill. The negative gradient, \\(-\\nabla U\\), therefore, points straight <strong>downhill</strong>. 
          And that's exactly where the force pushes you. A ball always rolls downhill, from high potential to 
          low potential. It's that simple.
      </p>
      <p>
          Any force you can write this way is called a <strong>conservative force</strong>. It means the work done 
          when moving between two points doesn't depend on the path you take, only on the change in potential 
          energy between the start and end points.
      </p>

      <h3>TL;DR</h3>

      <ul>
        <li>Partial derivatives: \\( \\partial f/\\partial x \\), \\( \\partial f/\\partial y \\) — slope in one direction</li>
        <li>Gradient: \\( \\nabla f = \\partial f/\\partial x \\hat{i} + \\partial f/\\partial y \\hat{j} + \\partial f/\\partial z \\hat{k} \\)</li>
        <li>Gradient points uphill — field points downhill: \\( \\vec{E} = -\\nabla V \\)</li>
        <li>Critical point: \\( \\nabla f = 0 \\)</li>
        <li>Second derivative test: use \\( D \\) to classify max, min, saddle</li>
        <li>Always match coordinate system to symmetry</li>
      </ul>

      <p>And remember: the universe doesn’t care how lost you are on a hill.  
      It only cares about the gradient.</p>
    `
  
  },
  "multiple-integrals": {
    title: "Multiple Integrals",
    content: `
      <h3>Multiple Integrals</h3>
      <p>
          Hey, remember when you started learning about integration, and your maths teacher told you to include 
          the dx after the integral, but you never bothered, because you thought it weren’t important? 
          <strong>Well now it is important!</strong>
      </p>
      <p>
          Alright, so you know how to integrate in one dimension to find the area under a curve. Easy stuff. 
          But what if you want to find the <strong>volume</strong> under a 3D surface? For that, we need to 
          upgrade from a single integral to a <strong>multiple integral</strong>.
      </p>

      <h4>Double Integrals</h4>
      <p>
          Instead of adding up an infinite number of tiny rectangular strips under a 2D line, we're now adding 
          up an infinite number of tiny, skinny columns under a 3D surface. This is called a 
          <strong>double integral</strong>.
      </p>
      <p>
          How do you solve them? You just work from the inside out.
      </p>
      <p>
          For an integral over <em>x</em> and <em>y</em>, you first integrate with respect to one variable (say, <em>y</em>) 
          while pretending <em>x</em> is just a constant. Then you take the result of that—which will just be a 
          function of <em>x</em>—and integrate it normally. Done.
      </p>
      <p>
          \\(I = \\int(\\int f(x,y) dy) dx\\)
      </p>

      <h4>Dealing With Awkward Shapes</h4>
      <p>
          Of course, you're not always going to be integrating over a nice, neat rectangle. What if your 
          domain is a triangle, a circle, or some weird blob?
      </p>
      <p>
          In this case, the limits of your <em>inner</em> integral just become functions instead of constants. 
          For example, you might integrate from the line \\(y = x\\) up to the curve \\(y = \\sqrt{x}\\). 
          And please, for the love of everything, remember that only the inner integral takes up the 
          functions, because if you don’t it will be an <strong>enormous pain in the arse</strong> when you see 
          that it doesn’t work.
      </p>
      <p>
          Matter of fact, if you don’t believe me, you try integrating this with the functions on the 
          outside integrand, and then when you realise that I was right all along, come back crying like 
          the sad little baby you are smh.
      </p>
      <p>
          Anywho, a key pro-tip is that you can often swap the order of integration (\\(dx dy\\) vs 
          \\(dy dx\\)) to make the maths way less painful.
      </p>

      <h4>Changing Coordinates</h4>
      <p>
          Let's be honest, trying to describe a sphere or a cylinder using <em>x</em>, <em>y</em>, and <em>z</em> is a 
          complete nightmare. The maths gets disgusting really fast, as the notes show when trying to find 
          the volume of a sphere. Luckily, we can just switch to a coordinate system that isn't rubbish 
          for our problem. The big ones you'll use are:
      </p>
      <ul>
          <li>
              <strong>Spherical (\\(r, \\theta, \\phi\\)):</strong> Perfect for spheres and anything that looks like a ball.
          </li>
          <li>
              <strong>Cylindrical (\\(r, \\theta, z\\)):</strong> Your go-to for cylinders, pipes, and discs. R is 
              the distance from the centre, z is the height, and theta is the angle.
          </li>
      </ul>

      <h4>The Volume Element</h4>
      <p>
          Here's the one thing you absolutely have to remember, and I tend to forget so please don’t. The 
          tiny chunk of volume, <strong>dV</strong>, is different in each system. Why? Because \\(d\\theta\\) and 
          \\(d\\phi\\) are <strong>angles, not lengths</strong>. To turn them into actual lengths, you have to 
          multiply by a radius.
      </p>
      <ul>
          <li><strong>Cartesian:</strong> The tiny box is a perfect cube. \\(dV = dx dy dz\\)</li>
          <li><strong>Cylindrical:</strong> The tiny box is a curved wedge. Its volume is (thickness)×(height)×(arc length). \\(dV = r dr d\\theta dz\\)</li>
          <li><strong>Spherical:</strong> The tiny box is a chunk of an onion. Its volume is (thickness)×(north-south length)×(east-west length). \\(dV = r^2 \\sin(\\theta) dr d\\theta d\\phi\\)</li>
      </ul>
      <p>
          <strong>Please remember to add the \\(r\\) and the \\(r^2\\sin(\\theta)\\), I always forget it, and I don’t want 
          you to suffer like I did...</strong>
      </p>

      <h4>Volume of a Sphere</h4>
      <p>
          Remember in the notes how they calculated the volume of a sphere using Cartesian coordinates? It 
          was a horrible mess of substitutions and trig identities. <em>Absolute nightmare fuel.</em>
      </p>
      <p>
          Now watch this. In spherical coordinates, the volume is just \\(\\iiint 1 dV\\) over the volume of the 
          sphere. We just plug in our spherical \\(dV\\) and set the limits: <em>r</em> goes from 0 to the radius 
          <em>a</em>, \\(\\phi\\) goes all the way around from 0 to \\(2\\pi\\), and \\(\\theta\\) goes from the north pole to 
          the south pole, 0 to \\(\\pi\\).
      </p>
      <p>
          \\(V = \\int_0^a \\int_0^{2\\pi} \\int_0^\\pi r^2 \\sin(\\theta) d\\theta d\\phi dr\\)
      </p>
      <p>
          This integral is trivial to solve and gives you \\((4/3) \\pi a^3\\) straight away. Solve it yourself 
          and see. That's the power of choosing the right coordinate system. It turns a nightmare problem 
          into a two-line solution.
      </p>

    `
  
  },
  "line-integrals": {
    title: "Line Integrals",
    content: `
      <h3>Line Integrals</h3>
      <p>
          So far, we've been integrating over whole areas and volumes. But what if you only care about what 
          happens along a specific, curvy path? For that, you need a <strong>line integral</strong>.
      </p>
      <p>
          The classic example is calculating <strong>work</strong>. Imagine you're dragging something heavy through 
          a force field that changes from place to place (like a weird magnetic field, or just a very gusty 
          day in Bedworth). A line integral adds up all the tiny bits of work you do over every tiny step 
          of your journey.
      </p>
      <p>
          The formula looks like this:
      </p>
      <p>
          \\[W = \\int_C \\vec{F} \\cdot d\\vec{l}\\]
      </p>
      <p>
          Here, <em>C</em> is your path, <em>F</em> is the force field, and <em>dl</em> is a tiny vector pointing 
          along your path at every step.
      </p>
      <p>
          The dot product is the important bit. It makes sure we only count the part of the force that's 
          actually helping you move along the path. If you're pushing sideways, you're not doing any useful 
          work, and the dot product makes sure that contribution is zero.
      </p>

      <h4>Path Dependence</h4>
      <p>
          Here’s the kicker: for a general, random-ass vector field, the value of the integral 
          <em>depends on the path you take</em>. Going from point A to B in a straight line will give you a 
          different answer than taking some wiggly, scenic route.
      </p>
      <p>
          <strong>BUT!</strong> And this is a big but. If your vector field is <strong>conservative</strong>, 
          the path doesn't matter at all.
      </p>
      <p>
          What makes a field "conservative"? You've already seen it. A field is conservative if it's the 
          gradient of some scalar potential. In physics terms:
      </p>
      <p>
          A force <em>F</em> is conservative if \\(\\vec{F} = -\\nabla U\\).
      </p>
      <p>
          For these special fields (which include gravity and the electrostatic force, so they're pretty 
          important), the line integral only depends on the value of the potential <em>U</em> at the start and 
          end points.
      </p>
      <p>
          \\[\\int_a^b \\vec{F} \\cdot d\\vec{l} = U(a) - U(b)\\]
      </p>
      <p>
          It's a beautiful shortcut. It means for gravity, the work done lifting a book only depends on the 
          change in height, not whether you lifted it straight up or carried it up a flight of stairs.
      </p>

      <h3>Surface Integrals</h3>
      <p>
          Right, last one. What if you want to measure how much "stuff" is flowing through a surface? Like, 
          how much water is flowing through a net you've placed in a river? For that, you need a 
          <strong>surface integral</strong>.
      </p>
      <p>
          In physics, this idea of "flow" is called <strong>flux</strong>. You'll see it everywhere in 
          electromagnetism when you get to Gauss's Law, which is one of my favourite things to do ever, 
          so get hyped!
      </p>
      <p>
          The formula for flux is:
      </p>
      <p>
          \\[\\text{Flux} = \\iint_S \\vec{F} \\cdot d\\vec{S}\\]
      </p>
      <p>
          Let's break it down:
      </p>
      <ul>
          <li><em>F</em> is your vector field (the electric field, the flow of water, etc.).</li>
          <li><em>S</em> is the surface you're measuring over.</li>
          <li>
              <em>dS</em> is the new bit. It's a tiny vector representing a patch of your surface. Its length 
              is the area of the patch, and its direction \\(\\hat{n}\\) is the <strong>normal vector</strong>—a little 
              arrow pointing straight out, perpendicular to the surface. 
          </li>
      </ul>
      <p>
          Just like before, the dot product is doing all the work. It makes sure we only count the component 
          of the field <em>F</em> that is actually piercing through the surface. If the river is flowing parallel 
          to your net, nothing's going through, the dot product is zero, and the flux is zero. It only 
          measures what's truly passing through.
      </p>

      <h3>Parameterization</h3>
      <p>
          This is the main boss battle, no question.
      </p>
      <p>
          "<strong>Parameterization</strong>" is just a fancy word for describing your complex path or surface 
          using one or two simple variables (usually <em>t</em>, or <em>u</em> and <em>v</em>).
      </p>
      <ul>
          <li>
              <strong>For Line Integrals:</strong> You need to describe your entire path, \\((x(t), y(t), z(t))\\), 
              using a single variable <em>t</em>. For a straight line or a circle, it's easy. For some weird, 
              wiggly path, trying to find the right equations can be a proper nightmare. If you mess up the 
              parameterization, every single step that follows will be wrong.
          </li>
          <li>
              <strong>For Surface Integrals:</strong> This is even harder. You now need <em>two</em> variables, 
              <em>u</em> and <em>v</em>, to describe a curved surface in 3D space. It's a significant step up 
              in difficulty.
          </li>
      </ul>
      <p>
          <strong>Why it's a pain:</strong> It's often not obvious how to do it. It's more of an art than a 
          science and requires a good bit of geometric intuition that only comes with practice.
      </p>

      <h3>TL;DR</h3>

      <ul>
        <li>Double integral: \\( \\iint f(x,y)  dx  dy \\) = volume under surface</li>
        <li>Polar: \\( dA = r  dr  d\\theta \\)</li>
        <li>Cylindrical: \\( dV = R  dR  d\\phi  dz \\)</li>
        <li>Spherical: \\( dV = r^2 \\sin\\theta  dr  d\\theta  d\\phi \\)</li>
        <li>Gaussian: \\( \\int_{-\\infty}^{\\infty} e^{-x^2}  dx = \\sqrt{\\pi} \\)</li>
        <li>Line integral: \\( \\int_C \\vec{F} \\cdot d\\vec{l} \\)</li>
        <li>Conservative field: \\( \\vec{F} = -\\nabla U \\), path-independent</li>
        <li>Surface integral: \\( \\iint \\vec{F} \\cdot d\\vec{S} \\) = flux</li>
      </ul>

      <p>And remember: the universe doesn’t care how many dimensions you integrate over.  
      It only cares about the answer.</p>
    `
  
  },
  "fourier": {
    title: "Fourier Series",
    content: `
      <h3>Fourier Series</h3>
      <p>
          Alright, so you've got some function. It's probably a bit of a mess, but it repeats itself. Think 
          of a square wave or a sawtooth wave—they're not nice and smooth like the functions we're used to, 
          but they have a clear, repeating pattern.
      </p>
      <p>
          What if I told you that you could take any of these repeating, messy functions and rewrite it as 
          just a simple sum of sine and cosine waves?
      </p>
      <p>
          That's the big idea behind the <strong>Fourier Series</strong>. It's like taking a complex musical 
          sound and figuring out the exact recipe of simple notes (the frequencies) that you need to play 
          to recreate it. It’s one of the most powerful bits of maths in all of physics.
      </p>
      <p>
          The formula looks like this:
      </p>
      <p>
          \\[f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} [a_n\\cos(\\frac{n\\pi x}{L}) + b_n\\sin(\\frac{n\\pi x}{L})]\\]
      </p>
      <p>
          Here, <em>f(x)</em> is your original function, the <em>sin</em> and <em>cos</em> terms are your simple 
          "notes", and the coefficients <em>aₙ</em> and <em>bₙ</em> tell you the "volume" of each note in 
          the mix. The formula is basically just the average value of the function you are trying to produce, 
          plus an infinite combination of sine and cosine waves to get the desired shape.
      </p>

      <h4>Why Bother?</h4>
      <p>
          Honestly, this is a game-changer.
      </p>
      <ul>
          <li>
              <strong>Waves are everywhere:</strong> Light, quantum mechanics, vibrations... it's all waves. 
              Fourier series is the natural language for this stuff.
          </li>
          <li>
              <strong>Calculus becomes easy:</strong> Differentiating a square wave is a nightmare. Differentiating 
              a load of sines and cosines is dead simple.
          </li>
          <li>
              <strong>It separates the important stuff:</strong> The terms with small <em>n</em> are the big, slow, 
              dominant parts of the function. The terms with high <em>n</em> are the fast, tiny wiggles. In many 
              cases, we can just ignore the wiggles.
          </li>
      </ul>

      <h4>Finding the Coefficients</h4>
      <p>
          So how do you find the <em>aₙ</em> and <em>bₙ</em> coefficients for your function? You use a clever 
          trick called <strong>orthogonality</strong>.
      </p>
      <p>
          Basically, over an interval like <em>[-L, L]</em>, different sine and cosine waves are 
          "perpendicular" to each other. If you multiply two different ones and integrate, you get zero. 
          The only way you get a non-zero answer is if you integrate a wave with itself.
      </p>
      <p>
          We use this to "pick out" each coefficient one by one. With these orthogonality rules in mind, 
          we can see what happens if we multiply the entire thing by sin or cos.
      </p>
      <p>
          Multiplying by \\(\\cos(nx)\\) gives us:
      </p>
      <p>
          Then we integrate both sides. We know that cos integrated between \\(\\pi\\) and \\(-\\pi\\) gives us 0, 
          so the first term cancels out. By orthogonality, we know that the \\(\\sin(n\\pi)\\cos(n\\pi)\\) term becomes 
          0, and the \\(\\cos(n\\pi)\\cos(m\\pi)\\) just becomes \\(\\pi\\), leaving us with
      </p>
      <p>
          \\[\\int f(x) \\cos(\\frac{n\\pi x}{L}) = a_n L\\]
      </p>
      <p>
          We can rearrange this to get the value for an:
      </p>
      <p>
          \\[a_n = \\frac{1}{L} \\int f(x) \\cos(\\frac{n\\pi x}{L}) dx\\]
      </p>
      <p>
          Using a similar method, multiplying by sine gives us
      </p>
      <p>
          \\[b_n = \\frac{1}{L} \\int f(x) \\sin(\\frac{n\\pi x}{L}) dx\\]
      </p>
      <p>
          Finally, if we just integrate the functions without multiplying by either, we see that \\(a_0 L = 
          \\int f(x) dx\\), which rearranges to
      </p>
      <p>
          \\[a_0 = \\frac{1}{L} \\int f(x) dx\\]
      </p>

      <h4>Symmetries</h4>
      <p>
          Doing all those integrals is a proper pain in the arse. But if you're clever, you can save 
          yourself a massive amount of work by checking for symmetry first. <strong>Always sketch the function!</strong>
      </p>
      <h5>Even Functions (Symmetric)</h5>
      <p>
          If your function is a perfect mirror image around the y-axis (like \\(x^2\\) or \\(|x|\\)), it's 
          <strong>even</strong>.
      </p>
      <ul>
          <li><strong>The Shortcut:</strong> An even function is built entirely out of other even functions (cosines).</li>
          <li><strong>The Result:</strong> You know immediately that <strong>all the <em>bₙ</em> coefficients are zero</strong>. 
          Don't even bother calculating them. Just find \\(a_0\\) and \\(a_n\\). Job done.</li>
      </ul>
      <h5>Odd Functions (Anti-symmetric)</h5>
      <p>
          If your function has rotational symmetry about the origin (like <em>x</em> or \\(x^3\\)), it's 
          <strong>odd</strong>.
      </p>
      <ul>
          <li><strong>The Shortcut:</strong> An odd function is built entirely out of other odd functions (sines).</li>
          <li><strong>The Result:</strong> You know immediately that <strong>\\(a_0\\) and all \\(a_n\\) coefficients 
          are zero</strong>. You only need to calculate the <em>bₙ</em> coefficients. Half the work, just like that.</li>
      </ul>

      <h4>The Fine Print</h4>
      <p>
          There are a few final details you need to know about how these series behave.
      </p>
      <h5>Convergence</h5>
      <p>
          At any point where your function is nice and continuous, the Fourier series will match it perfectly 
          (with an infinite number of terms that is). However, at a <strong>discontinuity</strong> (a sharp 
          jump), the series does something clever: it converges to the <strong>exact midpoint of the jump</strong>.
      </p>
      <h5>Periodic Extensions</h5>
      <p>
          Your Fourier series is made of infinitely repeating sines and cosines. So, even if your original 
          function was only defined from <em>-L</em> to <em>L</em>, the series will just copy and paste that 
          shape over and over again for all <em>x</em>. It creates a <strong>periodic extension</strong>.
      </p>
      <h5>The Gibbs Phenomenon</h5>
      <p>
          At a sharp jump, the series doesn't just settle for the midpoint. It actually 
          <strong>overshoots</strong> the mark on either side. Even with an infinite number of terms, this 
          little overshoot never fully goes away; it just gets squeezed into an infinitely thin spike. 
          It's a weird quirk called the <strong>Gibbs Phenomenon</strong>.
      </p>

      <h4>What to Watch Out For</h4>
      <p>
          Trust me, I've made all these mistakes, so you don't have to.
      </p>
      <ul>
          <li>
              <strong>The Integrals:</strong> Be bloody careful with <strong>integration by parts</strong>. One 
              wrong sign will ruin everything. And don't forget that \\(\\cos(n\\pi)\\) is \\((-1)^n\\).
          </li>
          <li>
              <strong>The Interval:</strong> The period is <strong>2L</strong>. The formula uses <strong>L</strong> 
              (half the period). Don't mix them up.
          </li>
          <li>
              <strong>Symmetry:</strong> Don't just guess if a function is symmetric. Formally check it or 
              you'll get it wrong. A function that <em>looks</em> symmetric but isn't centred on \\(x=0\\) is 
              <em>not</em> even or odd.
          </li>
          <li>
              <strong>The Jumps:</strong> Remember, at a discontinuity, the series converges to the 
              <strong>midpoint</strong>. It's a classic exam question.
          </li>
      </ul>


      <h3>TL;DR</h3>

      <ul>
        <li>Fourier series: \\( f(x) = \\frac{a_0}{2} + \\sum (a_n \\cos nx + b_n \\sin nx) \\)</li>
        <li>\\( a_n = \\frac{1}{\\pi} \\int f(x) \\cos nx  dx \\), \\( b_n = \\frac{1}{\\pi} \\int f(x) \\sin nx  dx \\)</li>
        <li>Square wave: \\( f(x) = \\frac{1}{2} + \\frac{2}{\\pi} \\sum_{n \\text{ odd}} \\frac{1}{n} \\sin nx \\)</li>
        <li>Gibbs phenomenon: overshoot at discontinuities — never disappears</li>
        <li>Smooth functions → fast convergence; discontinuities → slow</li>
        <li>Used in signals, heat, quantum, compression</li>
      </ul>

      <p>And remember: the universe doesn’t care how jagged your function is.  
      It only cares about the wiggles.</p>
    `
  
  },
  "matrices": {
    title: "Matrices",
    content: `
      <h3>Linear Algebra</h3>
      <p>Time to talk about <strong>Linear Algebra</strong>. I know what you're thinking,
      <em>"Great, more maths..."</em>. But trust me, this stuff is the absolute
      bedrock of a huge amount of physics, especially quantum mechanics. If you want to
      understand QM, you <strong>have</strong> to understand this.</p>

      <p>The whole thing is about using <em>matrices</em>—which are just organised grids of
      numbers—to solve systems of equations and to figure out how things get
      stretched, squashed, and rotated in space.</p>

      <p>A matrix is just a rectangular array of numbers. For example, these are matrices:</p>
      
      <p>\\(\\begin{pmatrix}2&3 \\\\ 4&2 \\end{pmatrix}\\)</p>
      <p>\\(\\begin{pmatrix}1&0&2 \\\\ 0&1&3 \\\\ 4&0&1 \\end{pmatrix}\\)</p>
      <p>\\(\\begin{pmatrix}1&2&3&4 \\\\ 5&6&7&8 \\end{pmatrix}\\)</p>  
      
      <p>We're mainly going to be dealing with <strong>square matrices</strong>, which as
      you can probably infer, are matrices with as many rows as columns, in this case \\(A\\) and
      \\(B\\)</p>

      <h3>Matrix Operations</h3>
      <p>You can add matrices and multiply them by scalars, and it works exactly like
      you'd think. Add each individual value from one matrix with the corresponding value
      in the next matrix:</p>
      <p>\\(\\begin{pmatrix}1&2 \\\\ 3&4 \\end{pmatrix} + \\begin{pmatrix}5&6 \\\\ 7&8 \\end{pmatrix} = 
      \\begin{pmatrix}1+5&2+6 \\\\ 3+7&4+8 \\end{pmatrix} = \\begin{pmatrix}6&8 \\\\ 10&12 \\end{pmatrix}\\)</p>

      <p><strong>Matrix multiplication</strong> is a whole different beast. It's a bit
      of a bully and doesn't follow the rules you're used to. To get the element in the
      <em>i'th row and j'th column</em> of the new matrix \\(C = AB\\), you take the dot product
      of the <em>i'th row</em> of \\(A\\) with the <em>j'th column</em> of \\(B\\).</p>
      
      <p>That was a lot of words, I promise you it's not as clumsy as it sounds in practice, albeit still
      a bit of a pain. Here's an example:</p>
      <p>Say you have these two 2x2 matrices which you want to multiply together:</p>
      <p>\\(A = \\begin{pmatrix}1&2 \\\\ 3&4 \\end{pmatrix}, B = \\begin{pmatrix}5&6 \\\\ 7&8 \\end{pmatrix}\\)</p>
      <p>To find the element in the first row and first column of the resulting matrix, you take the
      two numbers in the first row of \\(A\\) (1 and 2) and the two numbers in the first column of
      \\(B\\) (5 and 7). Multiply the first numbers together (1*5 = 5), then the second numbers
      together (2*7 = 14), and add them up (5 + 14 = 19). So the element in the first row and
      first column of the new matrix is 19.</p>
      <p>Then, you take the same first row of \\(A\\) (1 and 2) and the <em>second</em> column of
      \\(B\\) (6 and 8). Multiply the first numbers together (1*6 = 6), then the second numbers
      together (2*8 = 16), and add them up (6 + 16 = 22). So the element in the first row and
      second column of the new matrix is 22.</p>
      <p>Next, you move to the <em>second row</em> of \\(A\\) (3 and 4) and the <em>first column</em> of
      \\(B\\) (5 and 7). Multiply the first numbers together (3*5 = 15), then the second numbers
      together (4*7 = 28), and add them up (15 + 28 = 43). So the element in the second row and
      first column of the new matrix is 43.</p>
      <p>Finally, you take the same second row of \\(A\\) (3 and 4) and the <em>second</em> column of
      \\(B\\) (6 and 8). Multiply the first numbers together (3*6 = 18), then the second numbers
      together (4*8 = 32), and add them up (18 + 32 = 50). So the element in the second row and
      second column of the new matrix is 50.</p>
      <p>Putting it all together, the resulting matrix \\(C = AB\\) is:</p>
      <p>\\(C = \\begin{pmatrix}19&22 \\\\ 43&50 \\end{pmatrix}\\)</p>

      <p>The most important thing you need to burn into your brain is this:</p>
      <p>\\[AB \\neq BA\\]</p>
      <p>Matrix multiplication is <strong>NOT</strong> commutative. The order matters, hugely. It's
      a completely new rule and it's dead easy to forget when you're in the middle of
      a problem. I mean, try and example yourself.</p>

      <h3>Solving Systems of Equations</h3>
      <p>Let's say you've got a classic system of equations:</p>
      <p>\\[x + 2y = 7 \\text{ and } 2x + 3y = 12\\]</p>
      <p>We can rewrite this in the much tidier matrix form \\(A\\mathbf{x} = \\mathbf{b}\\).</p>
      <p>\\(\\begin{pmatrix}1&2 \\\\ 2&3 \\end{pmatrix} \\begin{pmatrix}x \\\\ y \\end{pmatrix} =
      \\begin{pmatrix}7 \\\\ 12 \\end{pmatrix}\\)</p>
      <p>Here, \\(A\\) is the matrix of coefficients, \\(\\mathbf{x}\\) is the column vector of
      variables, and \\(\\mathbf{b}\\) is the column vector of constants.</p>
      <p>This is more than just looking neat; it lets us use proper tools to find the
      solution \\(\\mathbf{x}\\).</p>

      <h3>Gaussian Elimination</h3>
      <p>This is the main, practical way to solve these things. You've probably done it
      before by just adding and subtracting equations to eliminate variables. This is the
      formal version of that.</p>
      <ul>
          <li><strong>Make the Augmented Matrix:</strong> Shove \\(A\\) and \\(\\mathbf{b}\\)
          together into one matrix \\([A|\\mathbf{b}]\\).</li>
          <li><strong>Do Row Operations:</strong> You can swap rows, multiply rows by
          constants, and add multiples of one row to another.</li>
          <li><strong>The Goal:</strong> Keep doing this until the \\(A\\) part of your matrix
          turns into the <em>identity matrix</em> (the one with 1s on the diagonal and 0s
          everywhere else).</li>
      </ul>
      <p>Once you've done that, the \\(\\mathbf{b}\\) part of your matrix will have magically
      transformed into your solution vector \\(\\mathbf{x}\\). It's a bit of a grind and
      a proper test of patience, and one tiny arithmetic mistake will ruin the whole
      thing, so be bloody careful.</p>

      <h3>The Determinant</h3>
      <p>The <strong>determinant</strong> is a single number you can calculate for any square
      matrix, written as \\(\\det(A)\\) or \\(|A|\\). It tells you some fundamental stuff
      about the matrix.</p>
      <p>The determinant is the <em>volume scaling factor</em> of the transformation. In 2D, if
      you take a unit square (area = 1) and transform it with a matrix \\(A\\), the area of
      the new parallelogram you get is \\(|\\det(A)|\\).</p>
      <p>If \\(\\det(A) = 0\\), it means the transformation has squashed the shape into
      a lower dimension (e.g., a square becomes a line). It's lost all its
      area/volume. This is why a matrix with a zero determinant has no inverse. The
      transformation is irreversible—you can't un-squash a line back into a square
      because you've lost all that information.</p>

      <h3>Eigenvectors & Eigenvalues: The Matrix's True Colours</h3>
      <p>This is probably the most important concept in the whole topic.</p>
      <p>When a matrix \\(A\\) acts on a vector \\(\\mathbf{x}\\), it usually stretches and
      rotates it. But for every matrix, there are a few special vectors that <strong>don't
      get rotated at all</strong>. They only get stretched or shrunk. These special vectors
      are the <strong>eigenvectors</strong>. The factor by which an eigenvector is stretched
      is its corresponding <strong>eigenvalue</strong> (\\(\\lambda\\), the Greek letter lambda).</p>
      <p>This gives us the most famous equation in linear algebra:</p>
      <p>\\[A\\mathbf{x} = \\lambda\\mathbf{x}\\]</p>
      <p>In physics, eigenvectors represent the "natural" states or principal axes of
      a system. In quantum mechanics, the <em>eigenvalues</em> of a matrix are the
      <strong>only possible values you can measure in an experiment</strong>, and the
      <em>eigenvector</em> is the state the system is in when you measure that value.</p>
      <p>To find them, you solve the "characteristic equation" \\(\\det(A - \\lambda I) = 0\\)
      to get the eigenvalues \\(\\lambda\\), then plug them back into the main equation to find
      the eigenvectors \\(\\mathbf{x}\\).</p>

      <h3>Special Matrices & Diagonalization</h3>
      <p><strong>Special Matrices:</strong> You'll run into special types all the time.
      <em>Symmetric/Hermitian</em> matrices are important in QM because they have real
      eigenvalues (which is good, because you can't measure imaginary energy).
      <em>Orthogonal/Unitary</em> matrices represent pure rotations.</p>
      <p><strong>Diagonalization:</strong> This is the ultimate goal. For most matrices, you
      can find a special basis—made up of the matrix's own eigenvectors—where the
      matrix becomes <em>diagonal</em> (numbers on the diagonal, zeros everywhere else).
      Diagonal matrices are dead simple to work with. Diagonalizing a matrix is like
      finding the simplest possible point of view from which to look at the problem.
      In QM, diagonalizing the energy matrix is how you find the energy levels of an
      atom.</p>

    <h3>The Common Traps</h3>
    <ul>
        <li><strong>Matrix Multiplication:</strong> I'm saying it again. \\(AB \\neq BA\\).
        Don't forget it.</li>
        <li><strong>The Grind:</strong> Gaussian elimination and finding determinants is a
        long arithmetic slog. Be neat, be careful, and check your work as you go. One
        slip-up and it's all wrong.</li>
        <li><strong>Eigenvectors are weird:</strong> When you solve for an eigenvector,
        you're supposed to get a system with infinite solutions. Remember to introduce a
        parameter \\(t\\) to describe the whole line/plane of possible vectors.</li>
    </ul>


      <h3>TL;DR</h3>

      <ul>
        <li>\\( A\\vec{x} = \\lambda \\vec{x} \\) → \\( \\vec{x} \\) is eigenvector, \\( \\lambda \\) is eigenvalue</li>
        <li>Find \\( \\lambda \\) from \\( \\det(A - \\lambda I) = 0 \\)</li>
        <li>Find \\( \\vec{x} \\) from \\( (A - \\lambda I)\\vec{x} = 0 \\)</li>
        <li>Diagonalise: \\( A = S \\Lambda S^{-1} \\)</li>
        <li>Determinant = volume scaling factor</li>
        <li>Orthogonal: \\( A^T A = I \\)</li>
        <li>Symmetric: \\( A = A^T \\) → real \\( \\lambda \\), diagonalisable</li>
        <li>Similarity transform: \\( A' = S^{-1} A S \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how confused you are by matrices.  
      It only cares about the eigenvalues.</p>
    `
  
  },

    // Subtopics for Classical Mechanics
  "mechanics-intro": {
    title: "Introduction to Mechanics: You will become a prophet!!!",
    content: `
      
    <i>Haha! This is really exciting! Basically this is the first page I’ve worked on for 
    this website, and I’m actually producing something real! Isn’t that just the coolest? 
    Anyway erm, what were we here for, kinematics innit?.</i>

    <h2>Introduction to Kinematics</h2>
      <p>So let me be honest, the whole prophecy thing was a bit of a grift. You <i>probably won’t</i> 
      be a prophet, but you will be able to tell how high a ball will go if you throw it with a certain 
      amount of force. This concept is quite simple (and, in my honest opinion, quite boring) but is 
      nevertheless one of the foundational parts of physics.</p>

      <h3>Equations of Motion</h3>
      <ul>
        <li><code>v = u + at</code></li>
        <li><code>s = ut + ½at²</code></li>
        <li><code>v² = u² + 2as</code></li>
      </ul>

      <img src="images/kinematics-diagram.png" alt="Kinematics Diagram" style="max-width: 100%; border-radius: 8px;" />
      
      <p>These equations are derived under the assumption of constant acceleration.</p>
    `,
    image: "images/kinematics.png"
  },
  "newton-laws": {
    title: "Newton's Laws",
    content: `
    
    <h3>Newton's Laws of Motion</h3>
    <p> Now, for convenience's sake, instead of constantly refering to "Newton's nth law of motion," I'll instead
    refer to them as <b>N1</b>, <b>N2</b> and <b>N3</b> respectively. </p>
    <p> <b>N1</b>: <i>An object will remain at rest or in uniform motion unless acted upon by an external force.</i> </p>
    <p> <b>N2</b>: <i>The rate of change of momentum is equal to the total external force on the body</i> </p>
    <p> <b>N3</b>: <i>To every action, there is an equal and opposite reaction</i> </p>
    <h3>Contact forces (Friction)</h3>
    <p> As the name quite clearly implies, contact forces only take effect when two objects are in contact with
    each other. And just to be completely scientifically accurate, at the microscopic level, objects never
    actually <i>touch</i>, but rather the electromagnetic forces between the atoms in each object repel
    each other. But at the macroscopic level, it looks bloody close enough, so let's stop being neeks and
    just say they touch, okay? Lovely. </p>
    <p> Contact forces are a combination of some kind of friction, and a normal force. Not normal as in
    not weird, but normal as in perpendicular to the surface. Think in terms of <b>N3</b>, if you put
    an object on, say, a table, the object pushes down on the table, and the table pushes back up. That
    pushing back up is the normal force. </p>
    <p> As for friction, if you are here then you probably know what it is. But what you may not know is that
    there are two types of friction: static friction, and kinetic friction.</p>
    <p> Static friction is the friction which prevents an object from moving when a force is applied to it. So when
    you push an object along a rough surface, assuming you are so weak that the object doesn't move, the force that's
    currently wrestling you is static friction. </p>
    <p> My A-level Mechanics teacher taught me that (static) friction is a lazy force, in that it does the
    bare minimum required to stop the object from moving and no more. So if you push an object with a force of 5N, then
    static friction will push back with exactly 5N, not an ounce more. </p>
    <p> However, static friction can only do so much, because once you start pushing harder, the object begins to move.
    This means you have applied more force that the maximum static friction, which is given by the equation:
    \\(F_{s(max)} = \\mu_s N\\), where \\(\\mu_s\\) is the coefficient of static friction, and N is the normal force. </p>
    <p> And although the object is still moving, you can still probably feel a frictional force opposing your
    pushing. This is now kinetic friction, which is given by the equation: 
    \\(F_k = \\mu_k N\\), where \\(\\mu_k\\) is the coefficient of kinetic friction, and N is the normal force. </p>
    <p> This is functionally the same as static friction, except kinetic friction always puts some welly in, and applies
    as much force as it can. </p>
    <p> Interestingly, \\(\\mu_k\\) is usually less than \\(\\mu_s\\), meaning that it is easier to keep an object 
    moving once you have started than it is to actually get it moving. </p>
    <h3>Non-contact forces (Gravitational Force)</h3>
    <p> Non-contact forces are forces which act at a distance, meaning the two objects don't need to be in contact
    for a force to be applied. The most common example of this is gravity, which again to be a neek <em>technically</em>
    isn't a force but just the curvature of spacetime, but then we'd have to go into 
    <a href="http://127.0.0.1:5500/topic.html?topic=relativity">Special Relativity</a> (I actually mention it
    <a href="http://127.0.0.1:5500/subtopic.html?subid=relativity-summary&topic=relativity">here</a>) which we haven't
    done yet and also I don't want to confuse the flat earthers and it acts pretty similar to a force so for all
    intents and purposes yes, gravity is a force. And more importantly a non-contact force.</p>
    <p> To calculate the force between two masses, \\(m_1\\) and \\(m_2\\), a distance \\(r\\) apart, we use Newton's
    Law of Gravity:</p>
    <p>\\(F=\\frac{Gm_1m_2}{r^2}, \\text{ or in vector form, }\\mathbf{\\vec{F}}_{12}=-\\frac{Gm_1m_2}{r^2}\\hat{r}\\)</p>
    <p>And I know what you're thinking, "why is there a twelve there?" Well, thou silliest of sausages, that's not a
    twelve, it's actually just a one followed by a two, which yes is a twelve now that I've said it aloud, but just here
    me out, k?</p>
    <p> The 1 and 2 basically mean that this force is the force that mass 1 exerts onto mass 2. In the case of gravity,
    since it is an attractive force (as indicated by the negative in the formula), it appears like a force coming from
    mass 2, even though mass one is doing all the work. </p>
    <h3>Systems of particles</h3>
    <p> So far, we've only calculated forces on point masses. But how do we go about using more complex structures,
    which are obviously made up of many particles together?</p>
    <p> Answer: more or less the same way. It can be proven that the combined sum of forces of each particle
    behave as a single force acting on a point known as the <i>centre of mass</i>. This means that <b>N2</b>
    remains unchanged, if only we take "\\(a\\)" to be the acceleration of the centre of mass.</p>
    <p>But how do we find this 'centre of mass'?</p>
    <p> For uniform, symmetrical bodies, it is just the centre of the object. But for other continuous bodies which
    have funky shapes (like maybe a semicircle) or don't have uniform density, it's not quite that simple.</p>
    <p> Instead we must use this trusty formula here:</p>
    <p> \\(\\mathbf{\\vec{r}}_{CoM}=\\frac{\\int\\mathbf{\\vec{r}}dm}{\\int dm}\\) </p>
    <p> ...where \\(dm\\) is an infinitesimally small component of the mass</p>
    <p> Since \\(\\mathbf{\\vec{r}}_{CoM}\\) is a vector, it can be broken up into its \\(x\\), \\(y\\) and \\(z\\)
    components. So that means we can get (for instance) the \\(x\\) component of the CoM by doing: </p>
    <p> \\(x_{CoM}=\\frac{\\int xdm}{\\int dm}\\) </p>
    
    <h3>Forces Out of Balance</h3>

    <p>From <b>N2</b>, we know that when forces aren’t balanced, things accelerate. Let’s look at the 
    classic example: a block on a slope.</p>

    <p>The forces acting on it are:</p>
    <ul>
      <li><strong>Weight</strong> (\\( W = mg \\)) — pulling it down</li>
      <li><strong>Normal force</strong> (\\( N \\)) — pushing it up perpendicular to the slope</li>
      <li><strong>Kinetic friction</strong> (\\( F_K = \\mu_K N \\)) — opposing motion</li>
    </ul>

    <p>Now, acceleration is <strong>not</strong> a force — it’s the <em>result</em> of unbalanced 
    forces. So we don’t draw it as a single arrow; we show it as a double arrow to emphasize it’s the outcome.</p>

    <p>To find the acceleration, we resolve forces parallel and perpendicular to the slope:</p>

    <p>Perpendicular: \\( N - mg\\cos\\theta = 0 \\) → so \\( N = mg\\cos\\theta \\)</p>
    <p>Parallel: \\( mg\\sin\\theta - F_K = ma \\)</p>

    <p>Substitute \\( F_K = \\mu_K N = \\mu_K mg\\cos\\theta \\), and you get:</p>

    <p>\\( a = g(\\sin\\theta - \\mu_K \\cos\\theta) \\)</p>

    <p>So the acceleration depends on the angle and the coefficient of friction.</p>

    <p>If \\( \\theta \\) is small, friction wins — the block stays put.  
    If \\( \\theta \\) is large enough, gravity wins — the block slides down.</p>

    <h3>Equations of Motion (SUVAT and Calculus)</h3>

    <p>Now let’s talk about how objects move under different types of acceleration.</p>

    <h4>Constant Acceleration (SUVAT)</h4>

    <p>This is the simplest case — constant acceleration, like free fall or braking.</p>

    <p>I won't bother deriving them, so here they are:</p>

    <p>\\( v = u + at \\)</p>
    <p>\\( s = ut + \\frac{1}{2}at^2 \\)</p>
    <p>\\( v^2 = u^2 + 2as \\)</p>

    <p>These are the <strong>SUVAT equations</strong> — the bread and butter of kinematics.</p>

    <p>But one think you should remember (and one thing you'll <em> probably</em> forget a lot, at least I
    did...) is that they’re <strong>only valid when acceleration is constant</strong>. If you want my advice,
    make sure, when you have a calculation like this, always check before and after working it out that the
    acceleration is <em>constant</em>. Even if you calculate it and the answer seems sensible. Because if 
    it’s not, you need calculus.</p>

    <h4>Time-Dependent Acceleration</h4>

    <p>If acceleration changes with time — say \\( a = a(t) \\) — then you can’t use SUVAT. You have to integrate:</p>

    <p>\\( v - u = \\int_0^t a(t') dt' \\)</p>

    <p>Then integrate again to get position.</p>

    <p>Now this is conceptually quite simple, but for some reason, once people learn about SUVAT equations, they always
    forget this thing exists. So let me say this again: <strong>check if acceleration is constant!!!</strong></p>
    
    <p> And whilst it is <em>conceptually</em> quite simple, integration is only as simple as the function you're
    integrating. So if \\(a(t')\\) is a nice easy function, Glory be to God! If not, well, have fun m8...</p>

    <h4>Position-Dependent Acceleration</h4>

    <p>Now suppose acceleration depends on position — \\( a = a(x) \\). This is especially annoying because we are 
    literally trying to find \\( x \\), and yet it is being used in the bloody function itself?! Pisstake...</p>

    <p>But here’s a cute little trick: write \\( a(x) = dv/dt = (dx/dt)(dv/dx) = v dv/dx \\)</p>

    <p>We can then rearrange that to get:</p>

    <p>\\( v dv = a(x) dx \\)</p>

    <p>Integrate both sides:</p>

    <p>\\( \\frac{1}{2}(v^2 - u^2) = \\int_0^x a(x) dx \\)</p>

    <p>Now you can calculate the right-hand side — if you know \\( a(x) \\). Then, if you’re lucky, you can 
    integrate again to get \\( x(t) \\).</p>

    <h4>Velocity-Dependent Acceleration</h4>

    <p>Finally, if acceleration depends on velocity — like air resistance — then \\( a = a(v) \\)</p>

    <p>So:</p>

    <p>\\( \\frac{dv}{dt} = a(v) \\)</p>

    <p>Separate variables:</p>

    <p>\\( \\int_u^v \\frac{dv}{a(v)} = \\int_0^t dt' = t \\)</p>

    <p>So you can solve for \\( v(t) \\), then integrate to get \\( x(t) \\). As usual — whether this works 
    depends on the form of \\( a(v) \\). But the method is solid.</p>

    <h3>TL;DR</h3>

    <ul>
      <li><strong>Forces out of balance</strong> → acceleration</li>
      <li><strong>Acceleration is not a force</strong> — it’s the result of unbalanced forces</li>
      <li><strong>Constant acceleration</strong> → use SUVAT equations</li>
      <li><strong>Time-dependent acceleration</strong> → integrate \\( a(t) \\) to get \\( v(t) \\), then \\( x(t) \\)</li>
      <li><strong>Position-dependent acceleration</strong> → use \\( v dv = a(x) dx \\)</li>
      <li><strong>Velocity-dependent acceleration</strong> → integrate \\( dv/a(v) = dt \\)</li>
      <li><strong>ALWAYS CHECK YOUR BLOODY ACCELERATION TO SEE IF IT'S CONSTANT OR NOT!!!</strong></li>
    </ul>


    `,
    image: "images/newton-laws.png"
  },
  "energy": {
    title: "Work & Energy",
    content: `
    
    <h3>Work and Energy</h3>

    <p>You are likely familiar with the concept of <em>kinetic energy</em>. In baby terms, this is
    the energy something has when it moves. You're also probably familiar with the formula for kinetic
    energy:</p>
    <p>\\(T=\\frac{1}{2}mv^2=\\frac{p^2}{2m}\\)</p>
    <p>Now for some reason, the lecture notes have started using \\(T\\) for kinetic energy instead of
    \\(E_K\\) which I personally prefer. A bit random, but whatever I don't care.</p>
    <p>And if you couldn't tell, the second equation comes from remembering that we can define momentum
    as mass \\(\\times\\) velocity, \\(p=mv\\). With a bit of techy rearranging, we get that equation.</p>
    <p>Next, what is work? In physics, work is done when a force moves an object through a distance. We
    can define it mathematically as:</p>
    <p>\\( W = \\Delta T = T_2 - T_1 \\)</p>
    <p>...which, if you were paying attention, you'll notice is the same as the change in kinetic energy.
    If you do positive work on an object, you increase its kinetic energy, or speed it up. If you do 
    negative work, you decrease its kinetic energy or slow it down.</p>
    <p> How do we calculate work? The easy option is when the force is constant, in which case we use the
    formula we are all super familiar with:</p>
    <p>\\( W = Fd \\)</p>
    <p> Work done equals force times distance. Nothing new. <em>However...</em> if the force isn't constant,
    then our trusty GCSE formula don't work no more. This means we have to use a new formula, and by "new"
    I mean, it's just a slightly sexier version of the same formula:</p>
    <p>\\( W = \\int F dx \\)</p>

    <h3>Work in 3D.</h3>

    <p>The formula we used just now is only true in the strange case that we physicists use when we can't be arsed
    to do the proper maths, and thus assume God created the universe in only one dimension. But in reality,
    God created three dimensions for us to enjoy, so let's enjoy them. And actually, the formula isn't much
    different, we just use vectors instead of scalars:</p>
    <p>\\(W = \\int \\vec{F} \\cdot d\\vec{r} \\)</p>

    <p>Hey, lookey here, it's a dot product! If I remember correctly, the dot product of two vectors is the
    product of their magnitudes and the cosine of the angle between them. Or in other words, the dot product
    picks out the component of the force which is actually in the direction of motion. You know what that means?
    Take an object and push it with all your might. If if doesn't move, congratulations, you did zero work! Nice
    work, dork, especially since you didn't bloody do any...</p>
    <p> Anyway, moving on...</p>

    <h3>Conservative Forces</h3>

    <p> Or as I like to call them, Tory forces! Now I'm sure that there is an analogy you can make between
    conservative forces and the Tories, but I'd rather not piss anyone off, so you can decide why they are
    related on your own time. For now, they are conservative, so they are Tories. Capeesh?</p>

    <p>Tory forces are special, in that the work you end up doing only depends on where you begin and where
    you end up. That means whether you moves straight from point A to point B, or you take the scenic route,
    you end up doing the same amount of work. For example, if you lift a book, whether you pick it up like
    a normal human or throw it about like a spaz beforehand, gravity ends up doing the same amount of work.
    </p>
    <p> There is a quite fun way to represent this mathematically. Say you want to move from point A to
    point B, and you have two potential paths you can take, \\(P\\) and \\(P'\\). If the force moving you
    is a Tory force, then the work done can be represented as:</p>
    <p>\\(
      \\int_A^B \\vec{F} \\cdot d\\vec{r} \\Big|_{P} 
      = \\int_A^B \\vec{F} \\cdot d\\vec{r} \\Big|_{P'},
      \\)</p>

    <p>  \\(
      \\text{or} \\quad 
      \\int_A^B \\vec{F} \\cdot d\\vec{r} \\Big|_{P} 
      + \\int_B^A \\vec{F} \\cdot d\\vec{r} \\Big|_{P'} 
      = \\oint \\vec{F} \\cdot d\\vec{r} = 0,
      \\)</p>

    <p> Next, since we know that the work done isn't dependent on the journey, we can assign a value to
    each point in the space which corresponds to the work done to get there. This value is called the
    <strong>potential energy</strong>, \\( U \\). Potential is defined like this:</p>
    <p>\\( W = -\\Delta U \\)</p>
    <p> In other words, the change in the potential energy is the negative of the work done by the force.
    Why a negative? It's kinda just a convention, but it does make a fair bit of sense: if we take gravity
    as a prototype Tory force, then when gravity does positive work (like when you drop something), the potential
    energy decreases (the object has less potential to fall). Conversely, when you lift something, you do negative
    work against gravity, and the potential energy increases (the object has more potential to fall).</p>

    <h3>Conservation of Energy</h3>
    <p> What do we have here? It appears we have two formulae for work done. That means we can combine them! </p>
    <p>\\( W = \\Delta T \\text{and} W = -\\Delta U \\)</p>
    <p>So:</p>
    <p>\\( \\Delta T = -\\Delta U \\)</p>
    <p>Rearranging:</p>
    <p>\\( \\Delta T + \\Delta U = 0 \\)</p>
    <p>Or:</p>
    <p>\\( \\Delta (T + U) = 0 \\)</p>
    <p>Which means:</p>
    <p>\\( T + U = E = \\text{constant} \\)</p>
    <p>This new value \\( E \\) is the total mechanical energy, and it is conserved when only Tory forces 
    are doing work. This is what we call the <strong>principle of conservation of energy</strong>.</p>
    <p>Now, <strong>if</strong> a potential can be defined (i.e. if the force is a Tory), and the "if" was
    emphasised in the notes for some reason, so I'm emphasising it here too, then we can find the force by
    simply differentiating it with respect to position:</p>
    <p>\\( \\vec{F} = -\\nabla U \\), or in one dimension, \\( F = -\\frac{dU}{dx} \\)</p>
    <p>If you think about it, this is just the original \\( W = \\int F dx \\) formula, rearranged. Remembering
    that work done is the negative change in potential energy, \\(W=-U\\), we can plug that into the formula,
    giving us \\( -U = \\int F dx \\). Differentiating both sides gives us the formula above.</p>

    <p>But if the force <em>is</em> path-dependent — like friction — then sorry, mate, you can’t define potential energy. That’s a <strong>non-conservative force</strong>, and it’s basically the villain of physics.</p>

    <p>It steals energy and turns it into heat. No take-backs.</p>

    <p>And yes, this is why perpetual motion machines don’t work. The universe has rules. And friction is the bouncer.</p>

    <h3>Using Energy Conservation</h3>

    <p>Now if you can't be arsed to deal with changing dforces and accelerations, we have a nice little shortcut
    method. Since we know that the total energy is conserved, we can simply look at how much energy is present at
    the beginning and compare it to how much energy is present at the end. </p>
    <p>One of the most iconic examples of using potential energy in this way is with gravitational potential energy,
    but before we do that, my advisor is telling me that we need a new formula for gravitational potential energy.
    Before, we used the classic \\( U = mgh \\). Now this is pretty bloody good, except for one thing: it makes the
    usually quite reasonable assumption that the gravitational field, and hence the gravitational field strength 
    \\(g\\) is constant. At relatively small distances from Earth's surface, \\(g\\) is constant enough for us to
    not really care. However, at much larger distances, \\(g\\) actually decreases with distance, and thus we need a new 
    formula.</p>
    <p>So, we start with the formula for gravitational force:</p>
    <p>\\( F = \\frac{GMm}{r^2} \\)</p>
    <p>And we plug that into our work formula:</p>
    <p>\\( W = \\int F dr = \\int \\frac{GMm}{r^2} dr \\)</p>
    <p>Integrating that gives us:</p>
    <p>\\( W = -\\frac{GMm}{r} \\)</p>
    <p>And since we know that \\( W = -\\Delta U \\), we can say that:</p>
    <p>\\( \\Delta U = \\frac{GMm}{r} \\)</p>
    <p>And thus we can define gravitational potential energy as:</p>
    <p>\\( U(r) = -\\frac{GMm}{r} \\)</p>
    <p>Anyway, where were we? Oh yeah, energy conservation.</p>
    <p>Since we know that total energy is conserved, we can say that:</p>
    <p>\\( E_i = E_f \\text{ or } T_i + U_i = T_f + U_f \\)</p>

    <h3>Now, here’s a fun one: escape velocity.</h3>

    <p>How fast do you need to go to escape Earth’s gravity?</p>

    <p>Well, at infinity, both kinetic and potential energy are zero (potential energy approaches zero, kinetic is zero if you just barely make it).</p>

    <p>So initial energy: \\( \\frac{1}{2}mv^2 - \\frac{GMm}{R} \\)</p>

    <p>Set that to zero → \\( v = \\sqrt{\\frac{2GM}{R}} \\)</p>

    <p>Plug in the numbers → about 11.2 km/s.</p>

    <p>So if you’re a rocket, or a very ambitious kangaroo, that’s your ticket out.</p>

    <h3>And finally: power.</h3>

    <p>Power is work done per unit time. Simple.</p>

    <p>\\( P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v} \\)</p>

    <p>So the faster you do work, the more power you need.</p>

    <p>Which is why sprinting up stairs feels harder than walking. You’re not doing more <em>work</em> — you’re doing it faster. The universe rewards efficiency, but punishes haste.</p>

    <h3>TL;DR</h3>

    <ul>
      <li>Work = \\( \\int \\vec{F} \\cdot d\\vec{r} \\)</li>
      <li>For conservative forces, \\( W = -\\Delta U \\) → total energy conserved</li>
      <li>For non-conservative forces, energy is lost (usually to heat)</li>
      <li>Escape velocity? \\( \\sqrt{\\frac{2GM}{R}} \\)</li>
      <li>Power? \\( \\vec{F} \\cdot \\vec{v} \\) — because speed matters when you’re in a rush</li>
    </ul>

    <p>And remember: the universe doesn’t care how hard you tried.  
    It only cares about the dot product.</p>
    `,
    image: "images/newton-laws.png"
  },
  "shm": {
    title: "Simple Harmonic Motion",
    content: `
    
    <h3>Oscillations</h3>

    <p>An oscillation is when something moves between two points repeatedly. This happens when something is
    displaced from its resting position (more properly known as its <strong>equilibrium position</strong>), 
    and for whatever reason, there is a restoring force which tries to bring it back to that position, but 
    always overshoots and ends up going too far the other way, so then the restoring force tries to push it
    back again, but overshoots again, and does this forever.</p>

    <p>There are many common examples of oscillations, the most common two being a spring with a mass on the 
    end, and my personal favourite, the pendulum! In both of these cases, the restoring force is directly
    proportional to the displacement from equilibrium. In the case of the spring, the restoring force is
    provided by the spring itself, and in the case of the pendulum, it is provided by gravity. This relationship
    between restoring force and displacement is represented mathematically as:</p>
    <p>\\( F = -kx \\)</p>
    <p>Where \\( k \\) is the spring constant (how stiff the spring is), and \\( x \\) is the displacement from 
    equilibrium. And the negative sign tells us that the force <em>opposes</em> the displacement.</p>
    
    <p>When a system abides by this law, we call it <strong>Simple Harmonic Motion</strong> — or SHM, for short. 
    Not to be confused with SMH, which stands for 'shake my head,' which is the snarky comment I give every so 
    often.</p>

    <h3>Deriving the Equation of SHM</h3>
    <p>Now, apply Newton’s second law: \\( F = ma = m\\frac{d^2x}{dt^2} \\). So:</p>

    <p>\\( m\\frac{d^2x}{dt^2} = -kx \\)</p>

    <p>Rearrange:</p>

    <p>\\( \\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0 \\)</p>

    <p>Now, let \\( \\omega^2 = \\frac{k}{m} \\), and we get the <strong>equation of SHM</strong>:</p>

    <p>\\( \\frac{d^2x}{dt^2} + \\omega^2 x = 0 \\)</p>

    <p>This derivation may seem stupid and pointless to a bumbling fool like yourself, however an intellectual
    like me can see that... <b>**skims through notes** Ermmm...</b> Oh yeah! It's a second order differential
    equation now! And therefore we can solve for \\(x\\) like we normally would.</p>

    <p>Oh, and by the way, Isaac Newton invented this new notation so that you don't have to write "d squared 
    x by dt squared" every time you want to write the second derivative of x with respect to t. So now you can
    just write \\( \\ddot{x} \\) instead of \\( \\frac{d^2x}{dt^2} \\).</p>
    <p>\\(\\ddot{x} + \\omega^{2} x = 0\\)</p>
    <p> I personally think this is a bit moist, but whatever, you do what you want.</p>

    <p>I said we can solve for \\(x\\) like we normally would (if you don't believe me, go up like 
    <em>1, 2, 3, 4,</em> 5 lines, I ain't lying). And you definitely <em>could</em>, but on second thoughts,
    I can't be arsed, so let's just guess. Erm, IDK, \\( x = A\\cos(\\omega t) \\) sounds reasonable, right?</p>

    <p>First derivative: \\( \\dot{x} = -A\\omega \\sin(\\omega t) \\)</p>

    <p>Second derivative: \\( \\ddot{x} = -A\\omega^2 \\cos(\\omega t) = -\\omega^2 x \\)</p>

    <p>Plug it back in: \\( -\\omega^2 x + \\omega^2 x = 0 \\). How amazing! It works! Almost like we knew the 
    answer and therefore it wasn't a bloody guess - right I'm sorry, as you know I'm kinda just following
    the lecture notes with these, it says, quote "Its easiest to solve the SHM equation by guesswork. Try 
    \\( x = A\\cos(\\omega t) \\) where A and λ are constants", but that's harly a guess <strong> if you
    know it's gonna work</strong>, SMH (not to be confused with SHM)...</p>

    <p>Anyway, the most general solution is this:</p>

    <p>\\( x = A\\cos(\\omega t) + B\\sin(\\omega t) \\)</p>

    <p>Or, if you’re feeling neeky:</p>

    <p>\\( x = C\\cos(\\omega t + \\phi) \\)</p>

    <p>Where \\( C \\) is the amplitude, and \\( \\phi \\) is the phase angle — which just tells you where the
     oscillation started.</p>

    <p>And the period is how long one full cycle takes:</p>

    <p>\\( T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{m}{k}} \\)</p>

    <p>Based on that second rendition of the equation, we can see that the larger the mass, the longer the
    oscillation period.</p>

    <h3>Energy</h3>

    <p>The kinetic energy of the moving block is:</p>

    <p>\\( T = \\frac{1}{2}mv^2 \\)</p>

    <p>As we know from last time. We also know from last time that we can get the potential energy by integrating
    the force with respect to \\(x\\) and changing the sign. The force is \\(F = -kx\\), the condition for
    Simple Harmonic Motion, which <strong>you better bloody remember</strong>, 'cus it's important. Then integrating
    with respect to \\(x\\) and multiplying by \\(-1\\) give us:</p>

    <p>\\( U = \\frac{1}{2}kx^2 \\)</p>

    <p>We <em>also</em> know from last time that we can smoosh these together to get the total energy \\( E = T + U \\). 
    And we <em>also</em> know from last time that this total energy is conserved, meaning it’s 
    <strong>constant</strong>.</p>

    <p>Think about it. When the swingy thing is at the extremes — or I guess since I've mentioned Arc-V already, when the
    swingy thing is at the pendulum zones — (\\( x = \\pm A \\)), it stops for a split second — so \\( T = 0 \\), 
    \\( U = \\frac{1}{2}kA^2 \\). But when it’s flying through the middle (\\( x = 0 \\)), it’s at max speed — so 
    \\( U = 0 \\), \\( T = \\frac{1}{2}mv_{\\text{max}}^2 \\).</p>

    <p>So energy switches back and forth between kinetic and potential. And on average, half the time it’s kinetic, half 
    the time it’s potential. That’s called <strong>equipartition of energy</strong>.</p>


    <p>You might see people writing the solution as:</p>

    <p>\\( x = \\text{Re}(ae^{i\\omega t}) \\)</p>

    <p>Where \\( a = Ce^{i\\phi} \\)</p>

    <p>And you might think: “Why? Why make it more complicated?”</p>

    <p>Answer: because later, when we deal with <strong>damped</strong> and <strong>forced</strong> oscillations, this form makes the maths way easier.</p>

    <p>But for now? Just know it’s the same thing. The real part of a complex exponential gives you the cosine. The rest is just… presentation.</p>

    <h3>Damped Oscillations</h3>

    <p>Let’s face it: real life isn’t frictionless.</p>

    <p>In the perfect world of SHM, the pendulum swings far and carves the arc of victory. But IRL, we have that pesky
    thing known as air resistance. We usually ignore it in mechanics, but this time it's acutally getting in the way.
    If you've ever seen a pendulum, you'd know that the pendulum zones actually gets closer and closer to the centre
    until the pendulum eventually stops swinging</p>

    <p>This is <strong>damped oscillation</strong> — where energy leaks out due to friction, air resistance, or 
    whatever else. So let’s add a damper — like a piston in oil — to our mass on a spring.</p>

    <p>The damping force is proportional to velocity: \\( F_{\\text{damping}} = -b\\dot{x} \\), where \\( b \\) is 
    the damping constant, id est a measure of how wet our damping is exactly. And remember, the minus sign is important,
    because damping always <em>opposes</em> motion. Next, we apply Newton’s second law:</p>

    <p>\\( m\\ddot{x} = -kx - b\\dot{x} \\)</p>

    <p>Rearranged:</p>

    <p>\\( \\ddot{x} + \\gamma\\dot{x} + \\omega^2 x = 0 \\)</p>

    <p>Where \\( \\gamma = b/m \\) is the damping ratio, and \\( \\omega^2 = k/m \\).</p>

    <p>Now we can no longer "gUeSs" cosine as a solution, because cosines continue forever, whereas this system is
    loosing energy. So let's do it the proper way! Replace the derivative things for powers of \\(m\\):</p>

    <p>\\( m^2 + \\gamma m + \\omega^2 = 0 \\)</p>

    <p>Solve it in the typical quadratic solvy fashion (using the quadratic equation):</p>

    <p>\\( m = -\\frac{\\gamma}{2} \\pm \\sqrt{\\left(\\frac{\\gamma}{2}\\right)^2 - \\omega^2} \\)</p>

    <p>Now, depending on the discriminant (the bit under the square root) we get three cases: light, heavy, 
    and critical damping.</p>

    <ol>
      <li><strong>Light damping</strong> (\\( \\gamma < 2\\omega \\)), meaning the discriminant is negative:
        <ol>
          It still oscillates, but the amplitude decays exponentially. Like a pendulum.
        </ol><br>
      <li><strong>Heavy damping</strong> (\\( \\gamma > 2\\omega \\)), meaning the descriminant is positive: 
        <ul>
          No oscillation. Just slow return to equilibrium. Like a door that closes too slowly.
        </ul><br>
      </li>
      <li><strong>Critical damping</strong> (\\( \\gamma = 2\\omega \\)), meaning the discriminant is 0:
        <ul>
          The fastest return to zero without overshooting. This is what car shock absorbers aim for. Because
          nobody wants their car to bounce after hitting a pothole.
        </ul>
      </li>
    </ol>

    <h3>Forced Oscillations</h3>

    <p>A forced oscillation is...exactly what it sounds like, when you force a system to oscillate by constantly
    pushing it, like pushing a kid on a swing. We describe this pushing you are doing as the driving force:</p>
    <p>\\( F_{\\text{driving}}  = F_0 \\cos(\\omega t) \\).</p>
    <p>Where \\( F_0 \\) is how hard you are pushing, and \\( \\omega \\) is how often you are pushing (not to 
    be confused with \\(\\omega_0 = \\sqrt\\frac{k}{m}\\), which is the swingy thing's natural frequency, or
    how fast the swingy thing <em>wants</em> to oscillate). This means that our equation of motion we had before 
    is no longer equal to zero, instead:</p>

    <p>\\( \\ddot{x} + \\gamma\\dot{x} + \\omega_0^2 x = \\frac{F_0}{m} \\cos(\\omega t) \\)</p>

    <p>Again, we use complex exponentials as usual, but this time let's use \\( z = ae^{i\\omega t} \\).</p>

    <p>Sub it in, algebra algebra algebra, and finally we get the formula for the amplitude of the 
    oscillations:</p>

    <p>\\( |a| = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (\\gamma\\omega)^2}} \\)</p>

    <p> Now I personally find this \\(|a|\\) thing to be <em>slightly</em> misleading, because it looks like
    acceleration. Why on earth they would do this, especially when \\(A\\) is right there, I don't know.
    But anyway, moving on...</p>

    <p>And the phase shift:</p>

    <p>\\( \tan\\phi = -\\frac{\\gamma\\omega}{\\omega_0^2 - \\omega^2} \\)</p>

    <p>Remember back not to long ago, I made sure to distinguish between \\(\\omega\\), how fast you are
    pushing the swingy thing, and \\(\\omega_0\\), how fast the swingy thing wants to be pushed? Well, what
    if we decide to grant the swingy thing its request, by pushing it at its natural frequency?</p>
    <p> If you push the swingy thing near enough the frequency at which it wants to be pushed 
    (i.e. \\( \\omega \\approx \\omega_0 \\)), the swingy thing gets really excited. Because of this,
    it swings even further and carves a larger arc of victory. For those who don't speak Yu-Gi-Oh, that means
    the amplitude of the oscillation becomes really big. That’s <strong>resonance</strong>.</p>

    <h3>Pendulums and SHM</h3>

    <p>Now let’s take a proper look at the pendulum specifically. For a mass on a string, displaced by an angle 
    \\( \\theta \\), the restoring force is \\( -mg\\sin\\theta \\), which comes from the usual trigonometric
    find-the-perpendicular-component business. So the equation of motion is:</p>

    <p>\\( \\frac{d^2\\theta}{dt^2} = -\\frac{g}{l}\\sin\\theta \\)</p>

    <p>Up until now, pendulums have been the prominent example of simple harmonic motion. However, this equation
    seems to suggest otherwise: that pesky \\( \\sin\\theta \\) is getting in the way, and therefore pendulums
    <em>technically</em> don't exhibit simple harmonic motion. But, if \\( \\theta \\) is small enough, we can 
    use the trusty small angle approximation: \\( \\sin\\theta \\approx \\theta \\). Then we get:</p>

    <p>\\( \\frac{d^2\\theta}{dt^2} \\approx -\\frac{g}{l}\\theta \\)</p>

    <p>**In South Carolinan accent** Now I don't know about y'all, but that looks like simple harmonic motion to 
    me!</p>
    <p> In this case \\( \\omega^2 = g/l \\). So the period is:</p>

    <p>\\( T = 2\\pi\\sqrt{\\frac{l}{g}} \\)</p>

    <p>And this is one of the most famous equations in physics. Easy to test: tie a weight to a string, 
    measure the period, plot \\( T^2 \\) vs \\( l \\) — should be a straight line with gradient \\( 4\\pi^2/g \\).</p>

    <p>Keep the amplitude small. Or you’ll ruin the approximation.</p>

    <h3>TL;DR</h3>

    <ul>
      <li>SHM happens when \\( F = -kx \\) → leads to \\( \\ddot{x} + \\omega^2 x = 0 \\)</li>
      <li>Solution: \\( x = A\\cos(\\omega t) + B\\sin(\\omega t) \\) or \\( x = C\\cos(\\omega t + \\phi) \\)</li>
      <li>Angular frequency: \\( \\omega = \\sqrt{k/m} \\)</li>
      <li>Period: \\( T = 2\\pi\\sqrt{m/k} \\)</li>
      <li>Total energy is conserved: \\( E = \\frac{1}{2}kA^2 \\)</li>
      <li>Energy swaps between kinetic and potential — average split is 50:50</li>
      <li>Damped oscillations: \\( \\ddot{x} + \\gamma\\dot{x} + \\omega^2 x = 0 \\)</li>
      <li>Three regimes: light (oscillates and decays), heavy (no oscillation), critical (fastest return)</li>
      <li>Forced oscillations: driven by external force \\( F_0 \\cos(\\omega t) \\)</li>
      <li>Resonance occurs when \\( \\omega \\approx \\omega_0 \\) — amplitude peaks</li>
      <li>Pendulum: only SHM for small angles → \\( T = 2\\pi\\sqrt{l/g} \\)</li>
      <li>Takoma Narrows Bridge? Resonance killed it. Don’t mess with resonance.</li>
    </ul>

    <p>And remember, just like how when a pendulum swings one way, you know it will swing the other way, whenever
    things aren't working out, you can always make things swing your way!</p>
    
    `,
    image: "images/newton-laws.png"
  },
  "circular-motion": {
    title: "Circular Motion",
    content: `
    <p>I'll let you in on a little secret: I personally <em>hate</em> circular motion. I don't know
    why, something about it just makes it so difficult for me to wrap my head around. So, in typing
    these notes, I'll also kinda be teaching it to myself.</p>
    <p>Circular motion is something which probably doesn't need much introduction. A wheel rotating
    a planet orbiting a star, a car going around a roundabout, these are all examples of circular motion
    which you have seen. And whilst you probably knew that, what you maybe didn't know is that any 
    object moving in a circle is always accelerating, even if the speed doesn't change.</p>
    <p>"What? Accelerating when speed doesn't change? But acceleration is change in speed!" Well,
    in typical you fashion, you are wrong. If you paid closer attention in lessons, you'd know that
    acceleration is actually change in <em>velocity</em>. That probably seemed like a meaningless
    detail the first time you heard it, but remember, velocity is a vector, which means it also 
    has a direction. So if the direction changes (which in circular motion it does), then the velocity
    changes too, and thus the object is accelerating.</p>
    <p>However, even though you ignorantly rejected the premise that objects in circular motion are 
    accelerating, I will give you some credit: it <em>does</em> seem a bit odd to look at a linearly
    accelerating object and a rotating object and say that they are both accelerating in the same
    sense. For that reason, scientists have developed new names to describe the acceleration in circular
    motion. In fact, every quantity we have in linear mechanics has a rotational equivalent</p>

    <p>Let's start with the first one. In linear mechanics, we know velocity is change in position with 
    respect to time. However if we apply that definition to circular motion, we run into a problem. It's
    obvious that the rotaty thing is moving with some sort of velocity, but the overall position of any
    point on the rotaty thing doesn't change - it just leaves and then returns. So instead, we define a new
    quantity. Goodbye velocity, let's welcome our first new quantity, <strong>angular velocity</strong>!</p>
    <p>Unlike regular velocity, angular velocity measures the change in <em>angle</em> with respect to time.
    It is usually denoted by the Greek letter omega, \\( \\omega \\), and is measured in radians per second 
    (rad/s). Angular velocity can be calculated using:</p>
    <p>\\( \\omega = \\frac{\\Delta \\theta}{\\Delta t} = 2\\pi f = \\frac{2\\pi}{T} \\)</p>
    <p>Where \\( \\Delta \\theta \\) is the change in angle in radians, \\( \\Delta t \\) is the change in time,
    \\( f \\) is the frequency in hertz (Hz), and \\( T \\) is the period in seconds (s).</p>
    <p>We can also relate angular velocity to regular velocity using:</p>
    <p>\\( v = r\\omega \\)</p>
    <p>Where \\( v \\) is the regular velocity, and \\( r \\) is the radius of the circular path.</p>

    <p>Next up, we have acceleration. Just like how velocity is change in position with respect to time,
    acceleration is change in velocity with respect to time. And just like how we defined angular velocity
    for circular motion, we also need to define <strong>angular acceleration</strong> for circular motion.
    Angular acceleration is denoted by the Greek letter alpha, \\( \\alpha \\), and is measured in radians 
    per second squared (rad/s²). It can be calculated using:</p>
    <p>\\( \\alpha = \\frac{\\Delta \\omega}{\\Delta t} \\)</p>
    <p>Where \\( \\Delta \\omega \\) is the change in angular velocity, and \\( \\Delta t \\) is the change in time.</p>
    <p>We can also relate angular acceleration to regular acceleration using:</p>
    <p>\\( a = r\\alpha \\)</p>
    <p>Where \\( a \\) is the regular acceleration, and \\( r \\) is the radius of the circular path.</p>

    <p>Angular acceleration always points to the centre of the circle. And, since there is an acceleration towards
    the centre, by Newton's second law, that means there is a force towards the centre too. This force is called
    the <strong>centripetal force</strong>, and it is what keeps the object moving in a circle. I should also
    clarify: this force isn't a new special force which magically appears when things move in circles. It's the
    name for the net force which acts towards the centre of the circle. So it could be tension, gravity,
    friction, or any other force, as long as the net force points towards the centre of the circle.</p>
    <p>Centripetal force can be calculated using:</p>
    <p>\\( F_c = \\frac{mv^2}{r} = mr\\omega^2 \\)</p>
    <p>Where \\( F_c \\) is the centripetal force, \\( m \\) is the mass of the object, \\( v \\) is the regular velocity,
    \\( r \\) is the radius of the circular path, and \\( \\omega \\) is the angular velocity.</p>
    
    <p>Speaking of force, we also have the rotational equivalent of force, which is called <strong>torque</strong>,
    \\(\\tau\\), or, as I realised way too late... moment. Moment and torque are the same thing? Why didn't you
    tell me this earlier? I know what bloody moment is, why are you making think there are two different 
    quantities?</p>
    <p>Anyway, MOMENT (which is what I'll be calling it just to get back at them for not telling me, although
    you're probably better off learning it as torque) is calculated by multiplying the force applied to an object 
    with the perpendicular distance from the pivot point to the line of action of the force.</p>
    <p>\\( \\vec{\\tau} = \\vec{r} \\times \\vec{F} \\)</p>
    <p>Where \\( \\vec{\\tau} \\) is the torque, \\( \\vec{r} \\) is the position vector from the pivot point to the point
    where the force is applied, and \\( \\vec{F} \\) is the force vector.</p>
    <p>The magnitude of the MOMENT is therefore \\( \\tau = rF\\sin\\theta \\), where \\( \\theta \\) is the angle 
    between the position vector and the force vector. This mathematically shows that pushing perpendicularly to the
    lever arm creates the most rotational effect, which is why you always push a door at the handle, not near the 
    hinges.</p>

    <p>And since we are talking about the rate of change of momentum, we should also consider the rotational equivalent
    of momentum. Can you gues what it's called? Go on, take your time.</p>
    <p>...</p>
    <p>Is that you're final answer? Remember, once you lock it in, you can't change your answer.</p>
    <p>The rotational equivalent to momentum is called... <strong>angular momentum</strong>!!</p>
    <p>Angular momentum is denoted by \\( \\vec{L} \\). Why an L? Who knows? Anyway, in the same way we
    went from force to its rotational equivalent MOMENT by finding the cross product with the position vector,
    we can find angular momentum by finding the cross product of the position vector and the linear momentum
    vector.</p>
    <p>\\( \\vec{L} = \\vec{r} \\times \\vec{p} \\)</p>
    <p>Where \\( \\vec{L} \\) is the angular momentum, \\( \\vec{r} \\) is the position vector from the pivot 
    point to the point where the mass is located, and \\( \\vec{p} \\) is the linear momentum vector.</p>
    <p>The magnitude of the angular momentum is therefore \\( L = rp\\sin\\theta \\), where \\( \\theta \\) is the angle 
    between the position vector and the linear momentum vector. This mathematically shows that the 
    angular momentum is maximised when the object is moving perpendicularly to the position vector.</p>
    <p>And just like how force is the rate of change of momentum, MOMENT is the rate of change of angular momentum.
    This is called the rotational analogue of Newton's second law.</p>
    <p>\\( \\vec{F} = \\frac{d\\vec{p}}{dt} \\quad \\xrightarrow{\\text{Analogy}} \\quad \\vec{\\tau} = 
    \\frac{d\\vec{L}}{dt} \\)</p>
    
    <p>Isn't it so much fun seeing how everything in linear mechanics has a rotational equivalent? In fact,
    even mass has a rotational equivalent, the <strong>moment of inertia</strong>, \\(I\\).</p>
    <p>This may come as a surprise, considering there is no reason how much stuff in an object should
    change simply upon rotating it. But once again, you are proving how little attention you paid in
    lessons. Mass isn't meerly the amound of "stuff" in an object. It is properly defined as a measurement
    of an object's resistance to acceleration when a force is applied, or inertia. So replacing
    linear acceleration with angular acceleration, we get the moment of inertia, which is a measure
    of an object's resistance to angular acceleration when a MOMENT is applied.</p>

    <p>With everything we've done here, taking linear properties and finding their rotational equivalents,
    we can now go back to the well known equations of linear mechanics and convert them to their
    rotational equivalents, simply by substituting.</p>
    <p>For example, we know that momentum is mass times velocity, \\( p = mv \\). Replacing each
    quantity with its rotational equivalent, we get angular momentum is moment of inertia times
    angular velocity, \\( L = I\\omega \\).</p>
    <p>What about our good friend Newton's second law, \\( F = ma \\)? Replacing each quantity,
    we get MOMENT is moment of inertia times angular acceleration, \\( \\tau = I\\alpha \\).</p>
    <p>We can even take kinetic energy, \\(T = \\frac12mv^2\\), and turn it into rotational kinetic
    energy (no fancy equivalent unfortunately...), \\(T_\\text{rot}=\\frac12I\\omega^2\\)

    `

  },
  "collisions": {
    title: "Collisions",
    content: `
    <h3>Collisions in 1D</h3>

    <p>Let’s talk about collisions.</p>

    <p>Now you might be wondering, "what's a collision?" If so, you are either not a native English speaker or you
    have never lived life anywhere ever. When two things bump into each other and go crash! That's it. There is no
    scientific definition, at least not one which is of any use to us now.</p>

    <p>We obviously know that momentum is always conserved, so if two particles collide, their total momentum before
    and after the collision must be the same.</p>
    <p>A frame of reference is basically just a point of view. We will look at frames of reference in a lot more
    detain in the Special Relativity topic, which is up next, so stay tuned. But for now, they are just how things
    look like from your perspective. For example, if you are walking on a train which is moving at 50 km/h, and you walk
    at 5 km/h in the same direction as the train, then from your perspective, you are walking at 5 km/h, but 
    from the perspective of someone standing on the ground outside, you are walking at 55 km/h. This may seem 
    like an arbitrary observation, but as we will see a great deal in Relativity, we can actually probe physics
    differently in different frames of reference.</p>
    <p>We will be using two frames of reference:</p>
    <ol>
      <li>The <strong>lab frame</strong> — we measure velocities from our perspective, standing on the ground.
      This is the most intuitive way of viewing a collision: You have an object with mass \\(m_1\\) moving
      velocity \\(u_1\\), and it hits another object with mass \\(m_2\\) and \\(u_2\\). They crash into
      each other, and then you get two pieces of wreckage moving at speeds \\(v_1\\) and \\(v_2\\)</li>
      <li>The <strong>centre of mass (CoM) frame</strong> — we measure velocities from the perspective of
      the centre of mass of the two-particle system. This frame is less intuitive, but it makes the maths
      way easier. You could imagine it as if you are standing at the point where the two particles would
      crash into each other, and then they kinda just bounce off you when they hit you. In this frame, 
      momentum is always zero, because the two particles have equal and opposite momenta.</li>
    </ol>

    <p>For any collision without external forces, <strong>total momentum is always conserved</strong>. We
    classify collisions based on what happens to the <strong>kinetic energy</strong>.</p>
    <ol>
        <li><strong>Elastic Collisions:</strong> This is a perfect, "bouncy" collision where no kinetic
        energy is lost. Think of ideal billiard balls. In the CoM frame, the particles simply
        reverse their direction while keeping the exact same speed.</li>
        <li><strong>Completely Inelastic Collisions:</strong> This is a "sticky" collision where the
        maximum possible kinetic energy is lost (converted to heat, sound, etc.). The objects
        collide and stick together, moving as a single blob. In the CoM frame, this combined blob is
        completely stationary after the collision.</li>
    </ol>
    <p>Most real-world collisions fall somewhere in between these two ideals.</p>

    <p>So what happens when two particles collide? We assume:</p>
    <ul>
      <li>Total momentum is conserved — no external forces.</li>
      <li>Potential energy doesn’t change — interactions are short-range.</li>
    </ul>

    <h3>How to Solve a Collision Problem</h3>
    <p>Let's walk through the standard four-step method using the example from your notes
    (\\(m_1=7\\text{kg}, u_1=5\\text{m/s}; m_2=3\\text{kg}, u_2=-5\\text{m/s}\\)).</p>
    <dl>
        <dt><strong>Step 1: Find the Center of Mass Velocity (\\(v_{cm}\\))</strong></dt>
        <dd>This is the constant velocity of the system as a whole.
        \\[ v_{cm} = \\frac{m_1u_1 + m_2u_2}{m_1 + m_2} = \\frac{(7)(5) + (3)(-5)}{10} = 2 \\text{ m/s} \\]
        </dd>

        <dt><strong>Step 2: Switch to the CoM Frame</strong></dt>
        <dd>Find the initial velocities relative to the CoM by subtracting \\(v_{cm}\\).
        <p>\\( u'_1 = u_1 - v_{cm} = 5 - 2 = +3 \\text{ m/s} \\)<br>
           \\( u'_2 = u_2 - v_{cm} = -5 - 2 = -7 \\text{ m/s} \\)</p>
        </dd>

        <dt><strong>Step 3: Solve for Final Velocities in the CoM Frame</strong></dt>
        <dd>Apply the simple rules for the collision type.
        <p><em>For an elastic collision</em>, the velocities just reverse:<br>
           \\( v'_1 = -3 \\text{ m/s} \\)<br>
           \\( v'_2 = +7 \\text{ m/s} \\)</p>
        </dd>

        <dt><strong>Step 4: Switch Back to the Lab Frame</strong></dt>
        <dd>Add \\(v_{cm}\\) back to get the final answer.
        <p>\\( v_1 = v'_1 + v_{cm} = -3 + 2 = -1 \\text{ m/s} \\)<br>
           \\( v_2 = v'_2 + v_{cm} = 7 + 2 = +9 \\text{ m/s} \\)</p>
        </dd>
    </dl>
    <p>This powerful method turns a potentially complex algebra problem into simple, manageable
    steps.</p>


    <h3>TL;DR</h3>

    <ul>
      <li>Collisions conserve momentum — always.</li>
      <li>In the CoM frame, total momentum is zero — makes things simpler.</li>
      <li>Completely inelastic: particles stick together → move at \\( v_{\text{cm}} \\)</li>
      <li>Elastic: no KE lost → velocities reverse in CoM frame</li>
      <li>3D: use vectors — momentum conservation gives 3 equations</li>
      <li>Need more info to solve — usually energy or angles</li>
    </ul>

    <p>And remember: the universe doesn’t care how hard you try.  
    It only cares about the conservation laws.</p>
        `
  }, 

    // Subtopics for Special Relativity
  "relativity-intro": {
    title: 'Introduction to relativity: "c" what the Lord has done!',
    content: `
    <i>Based on the second part of PX155</i>


    <h3>What is Relativity?</h3>
    <p>Picture the scene:</p>
    <p>You, for some reason, are on your way to the Isle of Wight on a ferry. It's currently 10:02, and the ferry
    is scheduled to leave in 2 minutes. You are sat there, bored out of your mind, waiting for the ferry to leave.
    Luckily, you brought entertainment: a bouncy ball. You bounce it beneath you to pass the time</p>
    <p>Eventually, you feel a force, and the ferry begins to move. You look at your watch, and it says 10:04. As
    expected. You sit back excitedly as your journey begins.</p>
    <p>However, 10 minutes into the journey, you start getting bored again, so you decide to bounce the ball
    again. Exactly the same way you did before. You bounce it beneath you, and it bounces back up to you. </p>
    <p>Anyway, cool story, but what's the point?</p>
    <p>Well, think about it. Intuitively, you may think that, since the ferry is moving, the ball would bounce
    away from you, against the motion of the ferry. However, we know that it doesn't do this, because the ball
    accelerates forwards with the ferry, and bounces back up to you. But since that's the case, we can now pose an
    interesting question...</p>
    <p>...How do we know the ferry is actually moving?</p>
    <p>At first, this may seem like a silly question, but hold on, you arrogant twit. Let's be objective here. When
    the ferry was still, you were able to walk, run and bounce the ball as normal. Once the ferry started moving,
    you were still able to walk, run and bounce the ball as normal. So, from your perspective, nothing has actually
    changed. If you were blindfolded, you wouldn't be able to tell the difference (ignoring things like waves). So
    based on what do we say the ferry is moving?</p>
    <p>"Well," I hear you say, "we can tell the ferry is moving because we can see the land moving past us!"</p>
    <p>I mean, sure, but you aren't getting my point. As per your own confession, we see the land moving past us. So
    with that in mind, how can you be sure that the land isn't moving, and the ferry is still? How do you know that 
    the ferry isn't pushing the whole earth away from it?</p>

    <p> This is the essence of relativity. Ridiculous as it may sound, scientifically speaking, there is no way for
    you to objectively say that the ferry, or anything in fact, is moving. You can only say the ferry is moving
    relative to the land, or something else. I mean after all, the earth is moving around the sun, and the sun
    is moving around the centre of the galaxy, and the galaxy is moving through space. I'm sure you wouldn't say
    the ferry is moving at 515,000 mph, would you? So we have to select something to be stationary, from which we
    measure everything else in relation to, and that thing we take to be stationary is called an inertial
    reference frame</p>

    <h3 id="Galilean Transformations">Galilean Transformations</h3>
    
    <div class="container">
      <div class="text">
        <p>In the case of our scenario, let's say we have two potential inertial reference frames we can use: the land
        being considered stationary (call this the <strong>land frame, \\(S\\)</strong>), or the ferry being considered stationary
        (call this the <strong>ferry frame, \\(S'\\)</strong>). Each frame has its own set of coordinates relative to its origin,
        \\((x, y, z, t)\\) for the land frame, and \\((x', y', z', t')\\) for the ferry frame. And for the sake of simplicity, we'll
        assume the ferry only moves in the x-direction, so we can ignore the y and z coordinates, which would create
        complications which I could REALLY do without tbh.</p>

        <p>If in the land frame S, the ferry is moving at a speed u, then we can essentially think of this as the ferry 
        frame moving at speed u. Now say we have an event which occurs at a point in space and time, (x, t) in the land 
        frame S. How can we go about finding the coordinates of this event in the ferry frame S'?</p>
      </div>
      <div class="image">
        <div class="image-floater">
          <div class="image-box">
            <img src="images/Special Relativity/Frames S and S'.png" alt="Frames S and S'" style="max-width: 100%;
            border-radius: 8px; left: -0px;" class="pop-image"/>
          </div>
          <span class="image-tooltip" style="left:-130%;"> <div class="image-tooltip-title">
          Figure 1: Frames S and S'</div><div class="image-tooltip-desc">
          The land frame S is stationary, and the ferry frame S' is moving <br> at speed u in the x-direction.</div></span>
        </div>
      </div>
    </div>

    


    <p>Well, in this case, it's quite easy. The x-coordinate of the event in the ferry frame \\(S'\\) (so \\(x'\\)) is the
    x-coordinate of the event in the land frame \\(S\\) (so \\(x\\)) minus the distance the ferry has travelled in the time
    \\(t\\). Since, speed = distance x time (which is \\(ut\\) in this case) we can write this as \\(x-ut\\). And time OBVIOUSLY
    doesn't change, so the time-coordinate is the same in both frames.</p>
    <p>And voilà, we have our transformation equations:</p>

    <div class="hover-wrapper">
      <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
          <p>\\(t'=t\\)</p>
          <p>\\(x'=x-ut\\)</p>
          <p>\\(y'=y\\)</p>
          <p>\\(z'=z\\)</p>
        </div>
        <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
        Formula 1: Galilean Transformations</div><div style="color:white; font-size:20px">
        Formulae to switch from one frame to another</div></span>
      </div>
    </div>

    <p> I mean, this is pretty obvious stuff so far</p>
    <p> Velocity, like position, is also relative to the inertial reference frame we choose. For example, if we have
    something moving towards the ferry at speed v in the land frame \\(S\\), then in the ferry frame \\(S'\\), 
    <span class="popup-trigger" data-popup-id="v-u">it is moving at a speed \\(v-u\\)</span>.</p>

    <p> A while later, a guy called Maxwell discovered that electromagnetic waves travel at a unique speed, 
    \\(c=\\frac1{\\sqrt{\\epsilon_0 \\mu_0}}\\), the speed of light in a vacuum, which is approximately 300,000,000 m/s.
    This seems fairly uninteresting, until you consider that the speed of light only depends on vacuum properties of
    space, and not on the motion of the source or observer. This means that no matter what inertial reference frame
    you are in, the speed of light is always \\(c\\). This contradicts the Galilean transformation equations we derived
    earlier, which would suggest that the speed of light should be \\(±c-u\\).

    <p> So who was right?! <p>
    <p> **Spoiler alert, erm, it was Maxwell... yep, Maxwell was right...**</p>

    <p> Let's find out... with an experiment!!!<p>
    
    <h3 id="he luminiferous aether and The Michelson-Morley Experiment"> 
    The luminiferous aether and The Michelson-Morley Experiment </h3>

    <div class="container">
      <div class="text">
        <p> People began to think that there must be some sort of medium through which light travels, like how sound travels
        through air. This hypothetical medium was called the luminiferous aether, and it was thought that light moves at 
        speed \\(c\\) relative to this aether. So if we were to move through the aether at speed \\(i\\), then the speed of 
        light would be \\(-u\\) in the direction of motion, and c+u in the opposite direction. </p>
        <p> .</p>
        <p> The Michelson-Morley experiment was designed to detect the motion of the Earth through the aether. In short, the
        light comes from the source and is split into two beams. One goes straight through and the other is reflected and goes
        up. They both hit their respective mirrors and then are reflected back to the splitty thing, which the light goes through 
        and rejoins at the screen. The light then creates an interference pattern accordingly. The logic of the experiment is that
        if the earth is moving, the light will have to travel a longer distance in one direction than in the other. Therefore,
        by rotating it, we'd get a different interference pattern. We can then measure the shift to see how fast the earth moves
        through the aether. </p>
      </div>
      <div class="image">
        <div class="image-floater">
          <div class="image-box">
            <img src="images/Special Relativity/Michelson-Morley.png" alt="Michelson-Morley Experiment" style="max-width:100%; 
            border-radius: 8px;" class="pop-image"/>
          </div>
          <span class="image-tooltip" style="left:-400px"> <div class="image-tooltip-title">
          Figure 2: Michelson-Morley Experiment</div><div class="image-tooltip-desc">
          The light is split up by the half-silvered mirror in the middle. Then, due to the <br> 
          movement of the aether (or movement the earth through the aether depending <br> on which
          frame you choose to use) they are reflected back to the half-silvered <br> mirror at
          different times, causing an interference pattern. This <i> should </i> have <br> caused a
          detectable shift in the pattern.</div></span>
        </div>
      </div>
    </div>
    

    <p> Right, excellent! Foolproof this is! So we give it a go, and we detect a shift of... 0.0 ± 0.1. So nothing basically.
    Wait, that can't be right. Let's do it again... 0, again! They repeated the experiment a bajillion times, and came up
    with a bunch of cope to explain why it wasn't working. Bottom line is, there is no such thing as the luminiferous aether.
    And also, the speed of light... DOESN'T change in a moving frame? </p>

    <h3 id="The Postulates of Special Relativity">The Postulates of Special Relativity</h3>
    <p> Now things are REALLY getting interesting!</p>
    <p> In 1905, Einstein proposed a set of postulates which may or may not be inspired by the experiment just mentioned 
    who knows...</p>
        <li>The laws of physics are the same in all inertial reference frames.</li>
        <li>The speed of light in empty space is the same as measured in all inertial reference frames.</li>
    <p> And with this, we have the foundation for what we call... "Special Relativity!"</p>
    
    <div class="popup" id="v-u">
      <div class="popup-content">
        <button class="popup-close">&times;</button>
        <h4 style="font-family: 'Njal', sans-serif; font-size: 30px; text-decoration: underline; 
        margin-bottom: 0px; margin-top: 0px;">Speed in a Different Frame of Reference ✪</h4>
        <p>
          Whilst this is probably 'obvious,'  it might help to derive it nonetheless. We use
          the fact that speed is the derivative of position with respect to time, as well as
          the Galilean transformation equations we derived earlier:

          \\[
          v' = \\frac{dx'}{dt'} = \\frac{dx - u dt}{dt} = \\frac{dx}{dt} - u = v - u
          \\]
        </p>
      </div>
    </div>
    `,
    image: "images/newton-laws.png"
  },   
  "lorentz": {
      title: "Lorentz Transformations",
      content: `
      <p>Recapping from last time, we saw that light doesn’t change speed, even in a moving frame of reference. 
      This clearly goes against the results derived from the Galilean transformations. But how can this be the 
      case? The derivation seemed so simple after all?</p>

      <p>Well, let’s try it again, but using a method which is a bit more thorough. To do this, allow me to 
      introduce you to one of my personal favourite scientific things...</p>

      <h3>Space-time graphs!</h3>

      <p>Although, as you can see, the ones used for relativity are a little bit different to the ones you 
      use in other instances. That difference being the y-axis measures \\(ct'\\) instead of just \\(t'\\). 
      This becomes especially odd when you realise that \\(c\\) is a speed, and \\(t\\) is a time, meaning 
      \\(ct'\\) is a distance, which means... we now have a distance-by-distance graph?</p>

      <p>Believe it or not, this isn’t a mistake and is apparently completely intentional.</p>

      <p>Here, \\(ct'\\) represents the distance light travels in one second (a light-second if you will). 
      So, by comparing \\(ct'\\) to the distance some other object travels, we can determine the speed of the 
      object, by looking at the angle of the line produced.</p>

      <p>If there is a 45º angle between the \\(x'\\) axis and the \\(ct'\\) axis (so \\(x' = ct'\\)), then we 
      know that in one second, the object in question is travelling the same distance as light, therefore it is 
      going at light speed (this is called a <strong>lightlike path</strong>). If the line is steeper than 45º, 
      then we know that light is travelling a larger distance than the thing we’re measuring, so the object is 
      moving slower than light speed (this is called a <strong>spacelike path</strong>).</p>

      <p>(And by the same logic, if the line is shallower than 45º, it is travelling faster than light speed, 
      i.e. a spacelike path, which we now know is impossible, so we’ll ignore that.)</p>

      <p>Anyway, now that that’s sorted, let’s move on.</p>

      <h3>The Relativity of Simultaneity</h3>

      <p>Previously, when deriving the transformation of time from one frame to another, we ended up with 
      \\(t = t'\\), although now that I think about it, we didn’t really prove it, did we? Kinda just 
      asserted it, because it’s obvious, y’know. So let’s actually try and prove it.</p>

      <div class="container">
        <div class="image">
          <div class="image-floater">
            <div class="image-box" style="width:80%;">
              <img src="images/Special Relativity/Space-time S'.png" alt="Simultaneity S'" style="max-width: 100%; 
              border-radius: 8px;" class="pop-image"/>
            </div>
            <span class="image-tooltip"> <div class="image-tooltip-title">
            Figure 3a: Simultaneity in the S' Frame</div><div class="image-tooltip-desc">
            In the S' frame, Breanna sends a pulse of light to both Ava and Caitlyn, <br> who are
            equidistant from her. The light reaches both of them at the same time, <br> 
            so the events are simultaneous.</div></span>
          </div>
        </div>
        <div class="text">
          <p>Let’s imagine a scenario where we have three people: Ava, Breanna and Caitlyn. They are in a moving 
          frame, \\(S'\\), and each of them an equal distance apart. (This is simply represented by them being 
          equally spread out along the \\(x\\)-axis.)</p>
          <p>Breanna wants to get both of their attentions, so she sends a pulse of light in both directions. 
          (Remember, lightlike movement is represented by a ±45º line).</p>
          <p>From the diagram, we can see the two events happen at the same y-value on the space-time graph, 
          signifying they happen at the same time. In other words, they are simultaneous.</p>
        </div>
      </div>

      <div class="container">
        <div class="text">
          <p>Now let’s look at this scenario again, but now we are considering the not moving frame (\\(S\\) not prime).</p>
          <p>In the \\(S\\) not prime frame, everything in the \\(S'\\) frame appears to be moving to the right. 
          Therefore, the green arrows are angled slightly to the right.</p>
          <p><strong>HOWEVER</strong>, I hope you haven’t forgotten: The speed of light doesn’t change between 
          frames. This means that the light is still at a ±45º angle in the \\(S\\) not prime frame. But now, 
          the two events are on different points on the y-axis. So in other words, \\(t \\neq t'\\)!</p>
        </div>
        <div class="image">
          <div class="image-floater">
            <div class="image-box">
              <img src="images/Special Relativity/Space-time S.png" alt="Simultaneity S" style="max-width: 100%; 
              border-radius: 8px;" class="pop-image"/>
            </div>
            <span class="image-tooltip"> <div class="image-tooltip-title">
            Figure 3b: Simultaneity in the S' Frame</div><div class="image-tooltip-desc">
            In the S frame, Breanna sends a pulse of light to both Ava and Caitlyn, <br> who are
            equidistant from her, but in this frame, the light reaches them at different <br> 
            times. The events are no longer simultaneous.</div></span>
          </div>
        </div>
      </div>

      <p>Well, whaddo you know! The quote-unquote ‘oBvIoUs’ solution that you suggested before (yes, you, 
      all you, I had nothing to do with it...) turned out to be wrong!</p>

      <p>Well, what is the correct transformation then?</p>

      <h3>Lorentz Transformations</h3>

      <p>Well, man like Lorentz does know the correct answer. Now there is a long-ass derivation we could go 
      through, but let me just save you the effort and just give it to you:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; margin: auto;">
            <p>\\( t' = \\gamma(t - \\frac{ux}{c^2}) \\)</p>
            <p>\\( x' = \\gamma(x - ut) \\)</p>
            <p>\\( y' = y \\)</p>
            <p>\\( z' = z \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 1a: Lorentz Transformations</div><div style="color:white; font-size:20px">
          Formulae to switch from the S frame to the S' frame</div></span>
        </div>
      </div>

      <p>These translate \\(S\\) not prime co-ordinates into the S-primean language. Then to convert back to 
      the S-not-primean language, just replace \\(u\\) with \\(-u\\) and all the non-prime variables into prime variables.</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( t = \\gamma(t' + \\frac{ux'}{c^2}) \\)</p>
            <p>\\( x = \\gamma(x' + ut') \\)</p>
            <p>\\( y = y' \\)</p>
            <p>\\( z = z' \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 1b: Lorentz Transformations</div><div style="color:white; font-size:20px">
          Formulae to switch from the S' frame to the S frame</div></span>
        </div>
      </div>

      <p>You’ve probably noticed that pesky gamma which appears in some of the formulae. (I say, ‘some of the formulae’ 
      as if \\( y = y' \\) and \\( z = z' \\) aren’t completely irrelevant and useless...) This is something known as the 
      <strong>Lorentz factor</strong>, which itself can be calculated like this:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( \\gamma = \\gamma(u) = \\frac{1}{\\sqrt{1 - u^2/c^2}} \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 2: Lorentz Factor</div><div style="color:white; font-size:20px">
          Formulae to calculate the Lorentz factor</div></span>
        </div>
      </div>

      <p>...with \\( u \\) of course being the speed of the thing we are measuring. There is also a 
      long-ass derivation for this too, but let’s be honest, ain’t nobody got time for that.</p>
      <p>At very small speeds, the Lorentz factor is near enough 1 for us to be able to practically ignore it 
      (and \\( ux/c^2 \\) is near enough 0), which would give us back our original Galilean transformations. 
      But at high speeds (my teacher says about \\( 0.1c \\) is the threshold), it can actually make a 
      significant difference, which can lead to interesting effects:</p>

      <h3>Length Contraction</h3>

      <p>I have me a rod in a moving frame, \\( S' \\), therefore in a ‘still’ frame, \\( S \\), the rod is 
      moving at speed \\( u \\). Assuming that the whole universe is only \\( x \\) co-ordinates, we can say 
      that one side of the rod is at \\( x_1' \\), and the other side is at \\( x_2' \\). Obviously (for real 
      this time, and I’m taking the credit), the length of the rod is \\( L' = x_2' - x_1' \\). In the 
      stationary frame, the length of the rod is \\( L = x_2 - x_1 \\).</p>

      <p>If we apply the Lorentz transformations from before, we know that \\( x_1' = \\gamma (x_1 - ut) \\) 
      and \\( x_2' = \\gamma (x_2 - ut) \\). Therefore, using the formula for length from before and subbing 
      these in, we now have a brand-new formula for the length:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( L' = \\gamma L \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>

      <p> Actually applying this formula can be a little bit tricky in terms of figuring out which length is
      L and which one is L'. To give the practical interpretation of this, just remember that objects always 
      appear shorter to someone if, from their perspective, the object is moving. And objects appear at the 
      regular length if, again from their perspective, the object is stationary. </p>
      <p> In that case, since \\(\\gamma\\) is always more than or equal to one, that means that the side of 
      the equation with the \\(\\gamma\\) on it is the shorter length which is being stretched out. That must
      mean the side with the \\(\\gamma\\) on it is the length of the object in the frame where it it moving,
      and the one which is not attached to the \\(\\gamma\\) is the proper length </p>
 
      <p>Using the same logic, we can also get</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( L = \\gamma L' \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>

      <p>(Remember these are NOT the same equation. As to which one you use depends on which frame the object 
      is stationary in. Try and get used to it now, because it will save a WHOLE LOT of confusion later...)</p>

      <h3>Lorentz Contraction Demo</h3>

      <p> To give you a better idea of how length contraction works, here is an interactive demo which shows it in
      action. We are in the \\(S\\) frame, the frame in which you are stationary and relative to you, the rod appears to
      be moving. By using the slider to change the speed of the rod, you can see how the rod shrinks as it increases in
      speed. This contracted length of the rod is \\(L\\), with the original 400px length being \\(L'\\).</p>

      <div class="demo">
        <div style="margin:20px 0; text-align:center;">
          <label for="velocity">Velocity (as a fraction of c): </label>
          <input type="range" id="velocity" min="0" max="99" value="0">
          <span id="vValue">0</span>c
        </div>

        <div id="rod-container" style="
          position: relative;
          height: 60px;
          margin: 40px auto;
          width: 500px;
          text-align: center;
        ">
          <div id="ghost-rod" style="
            height: 40px;
            width: 400px;
            margin: 0 auto;
            background: rgba(180, 180, 180, 0.3);
            border: 2px dashed rgba(150, 150, 150, 0.6);
            border-radius: 12px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0px;
          "></div>
          <div id="rod" style="
            height: 40px;
            width: 400px;
            margin: 0 auto;
            background: linear-gradient(90deg, #4facfe, #00f2fe);
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(79, 172, 254, 0.7);
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 2px;
          "></div>
        </div>
        <p style="text-align:center; font-weight:bold; font-size:1.1em;">
          Contracted length: <span id="lengthValue">400</span> px
        </p>
      </div>

        




      <span class="popup-trigger example"><img src="images/Example.png" data-popup-id="example1" class="popup-trigger example"/></span>

      <div class="popup" id="example1">
        <div class="popup-content">
          <button class="popup-close">&times;</button>
          <h4 style="font-family: 'Njal', sans-serif; font-size: 30px; text-decoration: underline; 
          margin-bottom: 0px; margin-top: 0px;">Take the L, or take the L'?</h4>
          <p>
          As I mentioned before, it can be quite tricky to get your head around which one is L and which one is L',
          especially when trying to interpret a question, and 
          </p>
        </div>
      </div>

      <span class="popup-trigger example"><img src="images/Example.png" data-popup-id="example2" class="popup-trigger example"/></span>

      <div class="popup" id="example2">
        <div class="popup-content">
          <button class="popup-close">&times;</button>
          <h4 style="font-family: 'Njal', sans-serif; font-size: 30px; text-decoration: underline; 
          margin-bottom: 0px; margin-top: 0px;">Kore wa Egguzanpuru da</h4>
          <p>
          This is where the next example goes
          </p>
        </div>
      </div>

      <h3>Time Dilation</h3>
      <p>Now it’s time for the time!</p>
      <p>Say we have a clock. Regular clock. Our clock is again in the moving frame, \\( S' \\), and is stationary 
      in that frame (i.e. it’s moving in the \\( S \\) frame). Using a similar method to before, let’s see what 
      happens to the time in different frames of reference.</p>

      <p>The regular clock ticks (as regular clocks do). It first ticks at a given time, \\( t_1' \\). It then ticks 
      again at \\( t_2' \\). The time between those two ticks is obviously \\( \\Delta t' = t_2' - t_1' \\). 
      Simple enough.</p>

      <p>This \\( \\Delta t' \\) is called the <strong>proper time</strong>, the time measured in the frame where the 
      object is not moving.</p>

      <p>Now let’s take the same regular clock, but let’s look at it from the \\( S \\) frame. This means the clock 
      is now moving at speed \\( u \\). Now they can’t just measure the time between ticks like normal people, they 
      instead have to use the lovely Lorentz transformations, because Galileo doesn’t know what he’s talking about, 
      remember?</p>

      <p>Oh hey, the Lorentz transformations just called, they say they now go by their street name, the LTs. So 
      I’ll be calling ‘em that from now on. Thank you for understanding.</p>

      <p>Anyway, plug the times into the LT:</p>

      <p>\\( t_1 = \\gamma(t_1' + ux_1'/c^2) \\)</p>
      <p>\\( t_2 = \\gamma(t_2' + ux_2'/c^2) \\)</p>

      <p>And now subtract accordingly, to get our new formula:</p>

      <p>\\( \\Delta t = t_2 - t_1 = \\gamma(t_2' - t_1') + \\gamma u(x_2' - x_1')/c^2 \\)</p>

      <p>Now you may be wondering, what are we supposed to do with all that \\( x' \\) stupidity at the end? 
      Well luckily for you, it turns out that, since the clock is at rest in \\( S' \\), its position doesn’t 
      change — so \\( x_1' = x_2' \\). Plug that in and all that rubbish disappears!</p>

      <p>Hence we are left with:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( \\Delta t = \\gamma \\Delta t' \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 4a: Time dilation</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>

      

      <p>This means the time interval measured in the frame where the clock is moving is longer than the one 
      measured in the frame where it’s still. In other words, time slows down for moving clocks.</p>

      <p>One way to think of it is that the universe is so adamant that nothing can exceed light speed, that 
      as you approach it, time itself slows down to try and stop you.</p>

      <p>Oh yeah, and we can flip it around too:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( \\Delta t_u = \\gamma \\Delta t_0 \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 4b: Time dilation</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>

      

      <p>where \\( \\Delta t_0 \\) is the proper time (measured in the clock’s rest frame), and \\( \\Delta t_u \\) 
      is the time measured in any other frame.</p>

      <p>My friend… TIME is bloody RELATIVE?! How are you not freaking out? Isn’t that just sick? Jarring, 
      but still sick!!</p>

      <p>And this is real btw, I’m not joking. In fact, satellites have to account for relativistic effects 
      too. If they didn’t, your phone would think you’re in the middle of the ocean instead of your living room. 
      Funny, yes, but useless. Good thing we know about relativity, eh?</p>
      `,},
  "relative-energy": {
      title: "Relative Energy and Momentum",
      content: `
      
      <p>Let’s try something fun.</p>

      <p>Take two particles with the same mass, \\( m \\), and the same speed, \\( u \\), and have them move towards 
      each other at speed \\( u \\). As usual, we are starting off in the moving frame, \\( S' \\), which moves at 
      speed \\( u \\). In the still frame, \\( S \\), one of the particles is actually stationary.</p>

      <p>The two particles collide, creating a combined mass of \\( M \\). And since \\( M \\) is the total mass of the 
      two particles, \\( M \\) is obviously just \\( m + m = 2m \\), because mass can’t change. <em>Or can it…?</em></p>

      <p>In \\( S' \\), we can easily determine the momentum before and after. Before, \\( p = mu + m(-u) = 0 \\). And 
      afterwards we have \\( p = Mu = 0 \\times M = 0 \\). Looky there, it appears momentum is conserved as usual!</p>

      <p>Now let’s return to the \\( S \\) frame.</p>

      <p>Like I said before, now one of the particles is actually stationary, with the other one moving towards it at 
      speed \\( v \\). In addition, the final mass, \\( M \\), moves at speed \\( u \\) in the after photo.</p>

      <p>After the collision, the momentum of the system is just \\( Mu \\). Before, the momentum of the system is just 
      \\( mv \\). And whilst we could of course just leave it there, where’s the fun in that? I didn’t go through the 
      effort of explaining velocity addition for nothing y’know...</p>

      <p>Because we know that the speed of particle 1 in the \\( S' \\) frame, \\( v' \\), is just \\( u \\), we can 
      plug that into our velocity addition formula to get a better value for initial velocity:</p>

      <p>\\( v = \\frac{u + u}{1 + u^2/c^2} = \\frac{2u}{1 + u^2/c^2} \\)</p>

      <p>Except we now have a bit of a problem. Since \\( M \\) is obviously just \\( 2m \\), and momentum must be 
      conserved (thanks to the first postulate of special relativity), we should have \\( p_i = p_f \\). But if we 
      plug that in, we get:</p>

      <p>\\( p_i = m \\cdot \\frac{2u}{1 + u^2/c^2}, \\quad p_f = 2m \\cdot u \\)</p>

      <p>Which means \\( \\frac{2mu}{1 + u^2/c^2} = 2mu \\)... which only works if \\( u = 0 \\). So... it just doesn’t 
      equal that, does it?</p>

      <p>I wonder what you did wrong...</p>

      <h3>Relativistic momentum</h3>

      <p>I’ll bloody tell you what you did wrong — your ‘oBvIoUs’ assumption is wrong... again (<em>smh</em>). 
      <strong>Mass can and does change in different frames.</strong></p>

      <p>If we have a rest mass, \\( m_0 \\) (mass measured in the rest frame of the object), we can derive formulae 
      for the not-resting mass and the not-resting momentum:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( m = \\gamma m_0 \\)</p>
            <p>\\( p = \\gamma m_0 v \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 1: Relativistic mass and momentum</div><div style="color:white; font-size:20px">
          Formulae to calculate relativistic mass and momentum</div></span>
        </div>
      </div>


      <p>This is the correct expression for <strong>relativistic momentum</strong>. Not \\( mv \\), but 
      \\( \\gamma m_0 v \\). Because of course it is. The universe just *had* to make things interesting.</p>

      <p>Once again, for lower values of \\( v \\), this reduces back to Newtonian mechanics — \\( \\gamma \\approx 1 \\), 
      so \\( p \\approx m_0 v \\). But at high speeds? Oh, it matters. It matters a lot.</p>

      <h3>Relativistic Kinetic Energy</h3>

      <p>Next up, let’s see what happens to kinetic energy when you accelerate to near light speed. 
      In classical mechanics, kinetic energy is given by \\( \\frac{1}{2}mv^2 \\). Simple. Clean. Innocent.</p>

      <p>However, that doesn’t quite work in special relativity. We need a formula which respects the universe’s 
      decision to not allow anything to move faster than light. Because apparently, the universe has rules. And speed 
      limits. After doing some math (which I’ll skip because no one wants to see that), you end up with:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( E_K = (\\gamma - 1) m_0 c^2 \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 2: Relativistic Kinetic Energy</div><div style="color:white; font-size:20px">
          Formulae to calculate relativistic kinetic energy</div></span>
        </div>
      </div>

      <p>This may come across as a bit odd; after all, usually the relativistic equivalents of formulae look quite 
      like their classical counterparts, except with a gamma stuck at the front. Why is there a \\( \\gamma - 1 \\) now?</p>

      <p>Because... there just is.</p>

      <p>The maths just works that way. And you’re gonna have to trust me on this, because the derivation 
      is a bit clunky, but if you put in small values of \\( v \\), we do get back the original 
      \\( \\frac{1}{2}m_0v^2 \\). Trust me bro.</p>

      <p>Before the mass increased from \\( 2m_0 \\) to \\( 2\\gamma m_0 \\). That’s an increase of 
      \\( 2(\\gamma - 1)m_0 \\) (just subtract one from the other). Since this is the same as 
      \\( \\Delta E / c^2 \\), that means that \\( \\Delta E = 2(\\gamma - 1)m_0 c^2 \\), which... 
      no way... it can't be... can it?</p>

      <p>Never mind, I think I was just seeing things. Anyway, if we now add up the kinetic and rest energy, 
      we end up with... by Jove! It is!!!</p>

      <p>\\( E = E_0 + E_K = m_0 c^2 + (\\gamma - 1) m_0 c^2 = \\gamma m_0 c^2 = mc^2 \\)</p>

      <p>Or…</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( E = mc^2 \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3: Mass-energy relation</div><div style="color:white; font-size:20px">
          The GOAT formula! It shows that mass is just scrunched up energy</div></span>
        </div>
      </div>

      

      <p>That’s it! The iconic formula that people just blindly throw around when they want to sound sciency! 
      It’s here! But more importantly, it shows that all mass is actually just very very very very very 
      concentrated energy. And this is why nuclear bombs explode with as much kaboom-ity as they do. Because even a 
      tiny atom has a load of energy stored in it. Like, *absurd* amounts. We’re talking “a paperclip could power a 
      city for a week” levels of energy. If only we could release it all…</p>
      
      `},
  "relativity-summary": {
      title: "Summary of Special Relativity",
      content: `
      <p>One important thing we’ve learnt during this topic is that nothing moves faster than light speed. 
      But <em>why</em>? What makes light so special?

      <p>To answer that, let me draw your attention to something you’ve probably ignored. Light speed is usually 
      represented by the letter \\( c \\). But <em>why</em>? I mean it’s no surprise that physicists aren’t great 
      with coming up with abbreviations (like \\( q \\) for charge — bloody stupid that...), but still, why did 
      they use a \\( c \\)?</p>

      <p>Unlike most questionable letter choices — which are either based on Latin/Greek roots or the sad reality 
      that better letters are already taken — there’s actually a <em>cool</em> reason behind this one.</p>

      <p>That being: \\( c \\) <strong>isn’t actually a measure of light speed at all</strong>. It’s a measure of 
      <strong>causality</strong> (which, funnily enough, <em>does</em> begin with \\( c \\)). It measures the maximum 
      speed at which one event can <em>cause</em> another event to happen. It’s the universe’s way of saying, 
      “Hold on, you can’t just do something here and expect it to affect something over there <em>instantly</em>.”</p>

      <p>Turns out, <em>light</em> just happens to travel at — or at least extremely close to — that speed. So we 
      named the speed after light, even though it’s really the speed of <em>cause and effect</em>.</p>

      <p>Now, with that in mind, try thinking of the second postulate not as: “The speed of light is constant in all 
      inertial frames,” but instead as: “<strong>Nothing can move faster than the speed at which it can cause 
      something else to happen.</strong>”</p>

      <p>And suddenly… things start making a bit more sense.</p>

      <h3>And About Those “Paradoxes”…</h3>

      <p>Relativity has caused a lot of interesting thought experiments — like the infamous <strong>twin paradox</strong>.
      Which — to let you in on a little secret — <em>isn’t a paradox at all</em>. Once you learn to fight that
      “but oBvIoUsLy it should be symmetric!” feeling, the whole thing collapses into perfectly logical, if slightly 
      mind-bending, physics.</p>

      <h3>So, in conclusion, we’ve learnt:</h3>
      <ul>
        <li>Speed, time, distance, and even mass and energy are all <strong>relative</strong> and <strong>frame-dependent</strong>.</li>
        <li>As we approach light speed, we can no longer rely on “common sense” or the oBvIoUs approach (i.e. Galilean Transformations and Newtonian mechanics). Instead, we must turn to the Lorentz Transformations and their relativistic siblings.</li>
        <li>Whilst the <em>times</em> at which two events take place are frame-dependent, it <strong>isn’t possible</strong> for an event that happens <em>after</em> another in one frame to happen <em>before</em> it in another — as long as they’re causally connected. Causality is safe. For now.</li>
      </ul>

      <p>And that’s the end!</p>
      <p>And this is the <strong>first topic I’ve completed</strong>!! Please give me a round of applause whilst I take a bow.</p>

      <p>👏 🎩</p>

      <p>Thank you, thank you!</p>
      `},

    // Subtopics for Thermal Physics
  "thermal-intro": {
    title: `Introduction to Thermal Physics:\nTurn up the Heat, Odd-eyes Pendulum Dragon!`,
    content: `
    <p> Temperature, in normal human language, is a measure of how hot something is. But </p>
    `
  
  },
  "heat": {
    title: "Heat and Temperature",
    content: ` 

      <p>Let’s talk about temperature. We’re talking about <strong>temperature</strong> — the physical property that tells us how much kinetic energy the atoms or molecules in a system have.</p>

      <p>In other words, it’s a measure of how hyper the particles are. In the words of one of the A-level physics
      YouTube guys, don't remember who, "If I were to heat you up, you'd start moving too."</p>

      <p>This energy making the particles hyper is called the <strong>internal energy</strong>, \\( U \\). It includes 
      translational kinetic energy, vibrational energy, and all the other ways particles can jiggle and wiggle.</p>

      <h3>Temperature Scales</h3>

      <p>We will start off with discussing something we kinda take for granted: how do we measure temperature? And before
      you give me some smart arse answer like "Erm, you use a thermometre," well I mean yes, you're not wrong. But they
      aren't the only thing we can use. Whilst mercury thermometres are popular, there are other options, like:</p>
      <ul>
        <li>Alcohol thermometers</li>
        <li>Thermocouples</li>
        <li>Infrared measurements</li>
        <li>Expansion of a gas</li>
      </ul>
      <p>What do all these have in common, you (probably don't) ask? They all contain a substance which
      expands predictably with increasing temperature. Ideally, we want a linear relationship between the 
      measured property and temperature, or in mathmaticianese:</p>

      <p>\\( X(T) = X_0 + cT \\)</p>

      <p>Where \\( X(T) \\) is the value of the property at temperature \\( T \\). To calibrate it, we use 
      two fixed points - freezing and boiling will do the trick - and a substance to use, like water!</p>
      <ul>
        <li><strong>Ice point</strong>: \\( 0^\\circ \\text{C} \\)</li>
        <li><strong>Steam point</strong>: \\( 100^\\circ \\text{C} \\)</li>
      </ul>

      <p>Then any temperature between them can be found using:</p>

      <p>\\( T(X) = \\frac{100(X - X(0))}{X(100) - X(0)} \\)</p>

      <p>Assuming linearity — which is a fair assumption for small ranges.</p>

      <h3>Thermal Expansion</h3>

      <p>Most materials expand when heated. Because as temperature increases, the jiggliness (or 'vibrational energy'
      if you want to pass your exams) of the atoms goes up. This means they vibrate more, and their average 
      separation increases. That’s why the liquid in a thermometer rises. </p> 
      <p>Of course, this assumes the liquid expands a lot more than the glass does.</p>

      <h3>Linear Expansion</h3>

      <p>For expansion in one dimension:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( L = L_0 + \\Delta L \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 2: Linear thermal expansion</div><div style="color:white; font-size:20px">
          This one is quite obvious:</div></span>
        </div>
      </div>

      

      <p>Where \\( L_0 \\) is the original length, \\( L \\) is the new length, and \\( \\Delta L \\) is the change.</p>

      <p>We also have a new character, the <strong>linear expansion coefficient</strong> \\( \\alpha \\). This is
      pretty much a measure of how much an object expands when it heats up. It's defined like this:</p>
      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( \\Delta L = \\alpha L_0 \\Delta T \\)</p>
            <p>Or:</p>
            <p>\\( \\alpha = \\frac{1}{L_0} \\frac{\\Delta L}{\\Delta T} \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 2: Linear thermal expansion</div><div style="color:white; font-size:20px">
          This one is quite obvious:</div></span>
        </div>
      </div>

      <p>Units: \\( \\text{K}^{-1} \\)</p>

      <p>Examples:</p>
      <ul>
        <li>Aluminium: \\( 2.4 \\times 10^{-5} \\, \\text{K}^{-1} \\)</li>
        <li>Steel: \\( 1.2 \\times 10^{-5} \\, \\text{K}^{-1} \\)</li>
      </ul>

      <h3>Volume Expansion</h3>

      <p>Volume expansion is the same thing as linear expansion, except... it's not linear? It goes from one-dimension
      to three-dimension. We now have the <strong>volume expansion coefficient</strong> \\( \\beta \\), which is again,
      the same thing as the linear one from before, but not linear anymore:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( \\beta = \\frac{1}{V_0} \\frac{\\Delta V}{\\Delta T} \\)</p>
            <p>Or:</p>
            <p>\\( \\Delta V = \\beta V_0 \\Delta T \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3: Volume expansion</div><div style="color:white; font-size:20px">
          This one is quite obvious:</div></span>
        </div>
      </div>

      <p>And for isotropic materials, \\( \\beta \\approx 3\\alpha \\).</p>

      <p>Examples:</p>
      <ul>
        <li>Ethanol: \\( 7.5 \\times 10^{-4} \\, \\text{K}^{-1} \\)</li>
        <li>Glass: \\( \\approx 2 \\times 10^{-5} \\, \\text{K}^{-1} \\)</li>
      </ul>

      <h3>Comments</h3>

      <p>Some materials don’t follow this model:</p>
      <ul>
        <li>Water expands on cooling between \\( 0^\\circ \\text{C} \\) and \\( 4^\\circ \\text{C} \\) — that’s why ice floats.</li>
        <li>'INVAR' materials have near-zero expansion over certain ranges — useful for precision instruments.</li>
      </ul>

      <p>Our model works well for moderate temperature changes. But for large ones? Not so much.</p>

      <h3>Heat Capacity</h3>

      <p>When heat flows into a system, its temperature changes. Yes, shocking I know. Make sure you write that
      down, otherwise you might forget it.</p>

      <p>We call the heat flow \\( Q \\), where:</p>
      <ul>
        <li>\\( Q > 0 \\): heat in</li>
        <li>\\( Q < 0 \\): heat out</li>
      </ul>

      <p>Heat flow increases internal energy.</p>

      <p>We define:</p>
      <ul>
        <li><strong>Molar heat capacity</strong>: \\( C \\), \\( Q = nC\\Delta T \\)</li>
        <li><strong>Specific heat capacity</strong>: \\( c \\), \\( Q = mc\\Delta T \\)</li>
      </ul>

      <p>For water: \\( C = 75.4 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\), 
      \\( c = 4190 \\, \\text{J kg}^{-1}\\text{K}^{-1} \\)</p>

      <h3>Latent Heat</h3>

      <p>Remember before where you make a specific effort to remember that when heat flows into a system, its
      temperature changes? How you wrote it down and everything? Forget that. 'Cus it's not true. At least not
      necessarily. </p>
      <p> During phase transitions — like melting or boiling — heat is absorbed or released without changing 
      temperature. Since the energy just enters or exits into the bonds to break or make them, the particles
      aren't being made to move faster or slower, and therefore the temperature doesn't change.</p>

      <p>This is <strong>latent heat</strong>, symbol \\( L \\), units \\( \\text{J kg}^{-1} \\).</p>

      <p>There are two kinds. The first of which is latent heat of fusion, which is the energy absorbed or released
      when transitioning between solid and liquid. The second is latent heat of vapourisation, which is between liquid and
      gas. During these transitions, the substance remains at constant temperature until the phase change is complete.</p>
      <p> And in case you didn't notice, the reason we still say the latent heat of 'vapourisation' even if we are
      transitioning from gas to liquid (i.e. the opposite of vapourisation) is because... I mean it's the same bloody
      amount innit? All that changes is whether the energy enters or exits the bonds, but the number of joules is
      the same, so we don't need a new word. Same with latent heat of fusion, although why they chose 'fusion' when
      that's a completely distinct process is beyond me...</p>

      <h3>Heat Transfer Mechanisms</h3>

      <h4>Conduction</h4>

      <p>heat transfer through solids (and liquids) is usually caused by atoms vibrating and bumping into nearby atoms,
      convincing them to vibrate also. In doing so, the atoms which were vibrating initially transfer their energy
      to the atoms they convinced. In doing so, no mass is transported: even though things are jiggling about now, they
      stay more or less in the same place overall. This is different to convection, which you may already know about,
      although it doesn't appear to be in the syllabus for now so don't you worry about it.</p>

      <p>For a rod, the rate at which vibrating atoms convince nearby atoms to vibrate is:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( \\frac{dQ}{dt} = -\\kappa A \\frac{dT}{dx} \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>
      
      <p>Where \\( \\frac{dQ}{dt}\\) is the heat energy transferred per second, \\(\\frac{dT}{dx}\\) is the temperature
      gradient, the amount of heat that is transferred per unit distance, \\(A\\) is the cross-sectional
      area of the rod, and \\( \\kappa \\) is thermal conductivity, which is a measure of how easily atoms are
      convinced. High thermal conductivities mean the atoms are gullible, whereas low conductivity means the atoms
      are stubborn.</p>

      <p>Examples:</p>
      <ul>
        <li>Silver, copper: \\( 400 \\, \\text{W m}^{-1}\\text{K}^{-1} \\)</li>
        <li>Glass: \\( 0.8 \\, \\text{W m}^{-1}\\text{K}^{-1} \\)</li>
        <li>Diamond: \\( 1800 \\, \\text{W m}^{-1}\\text{K}^{-1} \\)</li>
        <li>Expanded polystyrene: \\( 0.01 \\, \\text{W m}^{-1}\\text{K}^{-1} \\)</li>
      </ul>

      <h4>Radiation</h4>

      <p>Every single thing emits and absorbs radiation, regaardless of their temperature. Even objects which are freezing
      cold can emit radiation, and objects which are boiling hot can absorb radiation. The power radiated is proportional 
      to the surface area and \\( T^4 \\):</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( P = \\frac{dQ}{dt} = \\epsilon \\sigma A T^4 \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>
      
      <p>Where \\( \\epsilon \\) is emissivity, \\( \\sigma = 5.67 \\times 10^{-8} \\, \\text{W m}^{-2}\\text{K}^{-4} \\) 
      is the Stefan-Boltzmann constant.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Temperature measures internal energy — kinetic energy of atoms/molecules.</li>
        <li>Thermal expansion is when materials expand due to increased vibrational energy from heating</li>
        <li>Linear expansion: \\( \\Delta L = \\alpha L_0 \\Delta T \\)</li>
        <li>Volume expansion: \\( \\Delta V = \\beta V_0 \\Delta T \\), \\( \\beta \\approx 3\\alpha \\)</li>
        <li>Heat capacity: \\( Q = mc\\Delta T \\) or \\( Q = nC\\Delta T \\)</li>
        <li>Latent heat is the energy exchanged during phase transitions without temperature change.</li>
        <li>Heat transfer: conduction (vibrations/electrons), convection (fluid motion), radiation 
        (emission/absorption of photons).</li>
      </ul>

      <p>And remember: If I were to heat you up, you'd start moving too.</p>
    `
  },
  "properties": {
    title: "Thermal Properties of Matter",
    content: `
    <p>Right. Let’s talk about <strong>thermal physics</strong> — the science of why stuff 
    expands when you heat it, why gases don’t stay gases forever, and why your kettle boils at 100°C (unless you’re in a lab, or on a mountain, or in a submarine).</p>

    <h3>The Ideal Gas Law</h3>

    <p>The ideal gas equation describes the relationship between pressure, volume and temperature in a gas. You’ve probably
    seen this one before:</p>

    <p>\\( pV = nRT \\)</p>

    <p>Where:</p>
    <ul>
      <li>\\( p \\) = pressure</li>
      <li>\\( V \\) = volume</li>
      <li>\\( n \\) = number of moles</li>
      <li>\\( R \\) = gas constant = \\( 8.31 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\)</li>
    </ul>

    <p>Or, if you wanna be a bit funkier:</p>

    <p>\\( pV = Nk_B T \\)</p>

    <p>Where \\( N \\) is the number of molecules, and \\( k_B \\) is the Boltzmann constant = 
    \\( 1.38 \\times 10^{-23} \\, \\text{J K}^{-1} \\)</p>

    <p>This is the <strong>ideal gas law</strong> — and it works really well… as long as you’re not trying to 
    liquefy your gas. Because ideal gases don’t liquefy. They just keep expanding, bouncing, and pretending 
    nothing’s wrong.</p>

    <p>Key word of course: ideal. The world we live in however is far from it. In the real world, they *do* liquefy. 
    And that’s where things get spicy.</p>

    <h3>pV Diagrams</h3>

    <p>A <strong>pV diagrams</strong> is, as the name quite clearly suggests, a graph mapping the pressure of a system
    against the volume it takes up. These are pretty nifty because we can see how gases behave under different 
    conditions.</p>

    <p>For example, we can create a system where the pressure and volume of the system are allowed to change, but the
    temperature cannot. This is called an <strong>isotherm</strong>. By looking at the ideal gas equasion, we can see
    that if temperature is kept constant (and we know that \\(nR\\) and \\(Nk_B\\) are constant), this means that the
    entire right hand side of the equation is constant. Then by looking back to the left hand side, we can reason that
    as \\(p\\) increases, \\(V\\) decreases by a factor of the same amount. This results in a curve where 
    \\( p \\propto 1/V \\).</p>

    <p> (Approximately, of course, 'cus like I said, life ain't ideal.)</p>

    <p>Imagine a piston — a cylinder with a movable lid. You push it down, volume goes down, pressure goes up. Simple.</p>

    <p>But here’s the kicker: we also care about the walls.</p>
    <ul>
      <li><strong>Diathermal walls</strong>: Heat can pass through the walls. Like glass.</li>
      <li><strong>Adiabatic walls</strong>: The walls themselves don't actually transfer heat. Like a thermos.</li>
    </ul>

    <p>And we assume \\( n \\) is fixed — so changing \\( V \\) changes the density.</p>

    <p>It’s not just a piston. It’s a stage. And the gas is the star.</p>

    <h3>Real Gases</h3>

    <p>The ideal gas law fails when gases start to liquefy, since real molecules:</p>
    <ol>
      <li>Have <strong>finite volume</strong></li>
      <li>Feel <strong>intermolecular forces</strong></li>
    </ol>

    <p>So let's give the ideal gas a little tune up. First, we need to remember that the molecules, however small they
    are, do still have some volume. To fix this, we can replace \\( V \\) with \\( V - nb \\), where \\( b \\) is the 
    “co-volume”, id est the space molecules actually take up.</p>

    <p>Second, account for the intermolecular attractions. This time we replace \\( p \\) with 
    \\( p + a n^2 / V^2 \\), where \\( a \\) is a constant that measures how much molecules like each other.</p>

    <p>Put them together and you get:</p>

    <p>\\( \\left(p + \\frac{a n^2}{V^2}\\right)(V - nb) = nRT \\)</p>

    <p>This is the <strong>van der Waals equation of state</strong> — the ideal gas law with pizazz.</p>

    <h3>Van der Waals Curves</h3>

    <div class="container">
      <div class="text">
        <p>At high temperatures, van der Waals and ideal gas predictions are nearly identical. But as you cool the gas 
        down, it gets rather interesting.</p>

        <p>At 304 K (for CO₂), the curve develops a point of inflection (that's what you call the weird bend). And below 
        that, It has a local maximum and a local minimum (meaning the weird bend is even bendier now). This is cool and
        all -- but it's physically impossible. The pressure doesn't actually rise and then dip down like that. So what's
        going on?</p>

        <p>What's going on is that this is where the substance starts to change state. There is no actual change in
        pressure, and as we learnt before, no change in temperature. But for some reason the graph doesn't quite
        understand this concept, so it makes this dodgy little bend instead. </p>

      </div>
      <div class="image">
        <div class="image-floater">
          <div class="image-box">
            <img src="images/Thermal Physics/van der waals pv graph.png" class="pop-image" style="width: 300px"/>
          </div>
          <span class="image-tooltip" style="left:-120%;"> <div class="image-tooltip-title">
            Figure 1:Van de Waals' graph</div><div class="image-tooltip-desc">
            The adiabats appear steeper than the isotherms</div></span>
        </div>
      </div>
    </div>

    <p>Well that ain't good! So in order to actually gain useful information at that point, we use a Maxwell 
    construction: draw a horizontal line so that the areas above and below are equal. That flat line is where 
    iquefaction happens.</p>

    <p>From point A to B, gas turns to liquid at constant pressure. Then ffter B, the curve gets steep — because 
    compressing a liquid is pretty bloody difficult.</p>


    <h3>Phase Diagrams</h3>

    <p>In modern Christianity, we have a slight problem: usually the most ignorant and theologically illiterate people 
    are the most passionate evangelists, and in trying to explain the Trinity to non-Christians (or to other theologically
    useless Christians), they often use the stupid analogy of the Trinity being like water. So in the same way water can
    be solid, liquid or gas, they are not the same but they are all water, God is Father, Son and Spirit, they are not the
    same but they are all God. Slight problem tho... if we take the analogy to it's logical implication, you're basically
    saying that God is the Father one moment, then the Son in the next, then the Spirit at some other time. Which is
    literally modalism fgs. However, we may have better analogy for the Trinity coming up soon...

    <p>A <strong>phase diagram</strong> shows you which phase (solid, liquid, gas) a substance is in, based on pressure 
    and temperature. You'll notice they meet at a point in the middle, called the <strong>triple point</strong>. Here,
    a subtance is a solid, liquid, and gas all at the same time.</p>

    <ul>
      <li>Water: \\( T_{\\text{tr}} = 273.16 \\, \\text{K} \\), \\( p_{\\text{tr}} = 611 \\, \\text{Pa} \\)</li>
      <li>CO₂: \\( T_{\\text{tr}} = 216.1 \\, \\text{K} \\), \\( p_{\\text{tr}} = 527 \\, \\text{kPa} \\)</li>
    </ul>

    <p>It may or may not come as a shock that there are points in the graph where you can go straight from
    solid to gas, just by reducing the pressure or reducing the temperature. These processes are called sublimation
    (solid to gas) and deposition (gas to solid). And they are very possible. Like dry ice.</p>

    <p>Another thing which is a bit strange is the fact that the gas-liquid boundary literally just ends.
    I mean, if you didn't notice that before, check the graph again, it ends at a point called the 
    <strong>critical point</strong>. What's that supposed to mean?</p>

    <p>Well, it means exactly that. Beyond that point, there is no meaningful difference between the two. 
    Just a supercritical fluid — which is basically a liquid that has completely convinced itself it’s also a gas.</p>

    <h3>Kinetic Model of Gases</h3>

    <p>We've spoken a fair bit about pressure now, without really looking into the details of what's going
    on at the molecular level. So it's about time we considered how molecules invoke the concept of pressure.</p>

    <p>Gas molecules lull around the space they are contained in, and in doing so constantly bounce off the walls. 
    Each collision transfers momentum, which creates a force pushing the walls outward. That’s pressure. But juts
    how much pressure do these collisions cause?</p>

    <p>Time for a long, boring derivation. And I can't even just orange-link this thing because it's actually bloody
    important that you know this. Then again, if you did A-Level Physics, this derivation is probably quite familiar
    to you, so you'll be fine...</p>
    
    <p> Consider a cube full of gas. One molecule with mass \\(m\\) and speed \\(v_x\\) hits the right wall. Its 
    \\( x \\)-velocity flips (from \\(mv_x\\) to \\(-mv_x\\)). The change in momentum is therefore 
    \\( mv_x - (-mv_x) = 2mv_x \\).</p>

    <p>How many molecules hit the wall in time \\( dt \\)? Only those within \\( v_x dt \\) of the wall. And statistically
    speaking, if we assume the pressure in the cube is uniform, we can make an educated approximation and say anout
    half of them are moving toward it, where as the other half are moving away. And how do we then find out how many
    particles are hitting the wall? If we have \\(N\\) particles, and a volume \\(V\\), then of course the number of
    particles per unit volume is going to just be \\(\\frac{N}{V}\\). Then we multiply this by
    the volume of the particles hitting the wall at the given time interval. As volume is length times area, we
    can say the volume of particles which are hitting the wall is \\(v_xdt \\times A\\), where \\(A\\) is the
    area of the wall.</p>

    <p>We therefore know that the number of collisions within an infinitely small time interval is</p>

    <p>\\(n_{col}=\\frac12\\frac{N}{V}Av_xdt\\)</p>

    <p>So total momentum change is</p>

    <p>\\( dQ = n_{col} \\times 2mv_x = \\frac{N}{V} A m v_x^2 dt \\)</p>

    <p>Woah woah woah woah woah, Q? Where did Q come from?</p>

    <p>Well, yes, it's true that we usually use p for momentum. But guess what else also uses a p? That's right,
    pressure. We obviously can't use the same letter for both, and since pressure is currently the more 
    important one, momentum will just have to deal with it.</p>

    <p>We know from Newton's second law that force is rate of change of momentum, or \\( F = dQ/dt \\). And we
    also know that pressure is the force of the particles per unit are, or \\( p = F/A \\). Sub both of those in,
    and you get:</p>

    <p>\\( p = \\frac{N}{V} m v_x^2 \\)</p>

    <p>But in 3D, \\( v^2 = v_x^2 + v_y^2 + v_z^2 = 3v_x^2 \\). So:</p>

    <p>\\( p = \\frac{1}{3} \\frac{N}{V} m \\langle v^2 \\rangle \\)</p>

    <p>Multiply both sides by \\( V \\), and boom:</p>

    <p>\\( pV = \\frac{1}{3} N m \\langle v^2 \\rangle = N k_B T \\)</p>

    <p>So the ideal gas law comes from molecules bouncing around. Neat.</p>

    <h3>Maxwell-Boltzmann Distribution</h3>

    <p>Not all molecules move at the same speed. They follow the <strong>Maxwell-Boltzmann distribution</strong>:</p>

    <p>\\( f(v) = 4\\pi \\left( \\frac{m}{2\\pi k_B T} \\right)^{3/2} v^2 \\exp\\left( -\\frac{m v^2}{2 k_B T} \\right) \\)</p>

    <p>It’s a curve that:</p>
    <ul>
      <li>Peaks at the <strong>most probable speed</strong>: \\( v_{\\text{prob}} = \\sqrt{\\frac{2k_B T}{m}} \\)</li>
      <li>Has average speed: \\( v_{\\text{av}} = \\sqrt{\\frac{8k_B T}{\\pi m}} \\)</li>
      <li>And RMS speed: \\( v_{\\text{rms}} = \\sqrt{\\langle v^2 \\rangle} = \\sqrt{\\frac{3k_B T}{m}} \\)</li>
    </ul>

    <p>As temperature increases, the peak shifts right and the curve flattens.</p>

    <p>There are still slow molecules at high \\( T \\), and fast ones at low \\( T \\).</p>

    <p>That’s statistics for you.</p>

    <h3>kBT</h3>

    <p>\\( k_B T \\) is the characteristic thermal energy at temperature \\( T \\).</p>

    <p>At room temperature (290 K):</p>
    <ul>
      <li>\\( k_B T = 4 \\times 10^{-21} \\, \\text{J} \\)</li>
      <li>Or \\( 25 \\, \\text{meV} \\)</li>
    </ul>

    <p>This number will haunt you. You’ll see it everywhere.</p>

    <h3>Mean Free Path</h3>

    <p>Molecules don’t just hit the walls — they hit each other too. The average time between two particles 
    hitting each other is:</p>

    <div class="hover-wrapper">
      <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
          <p>\\( t_{\\text{mean}} = \\frac{V}{4\\pi \\sqrt{2} r^2 v_{\\text{rms}} N} \\)</p>
        </div>
        <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
        Formula 1a: Mean time between collisions</div><div style="color:white; font-size:20px">
        The average amount of time a gas molecule <br>can move before it hits another particle</div></span>
      </div>
    </div>

    <p>And using the good old speed \\(=\\) distance / time (or in this case, distance \\(=\\) speed \\(\\times\\) time) 
    the average distance between collisions — the <strong>mean free path</strong> — is:</p>

    <div class="hover-wrapper">
      <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
          <p>\\( \\lambda = v_{\\text{rms}} t_{\\text{mean}} = \\frac{V}{4\\pi \\sqrt{2} r^2 N} \\)</p>

          <p>Or, using the ideal gas law:</p>

          <p>\\( \\lambda = \\frac{k_B T}{4\\pi \\sqrt{2} r^2 p} \\)</p>
        </div>
        <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
        Formula 1b: Mean Free Path</div><div style="color:white; font-size:20px">
        The average distance a gas molecule can move <br> before it hits another particle</div></span>
      </div>
    </div>



    <p>For N₂ at STP: \\( \\lambda \\approx 5.8 \\times 10^{-8} \\, \\text{m} \\) — about 300x the molecular radius.</p>

    <p>So yeah. They don’t get far.</p>

    <h3>Heat Capacity of Gases</h3>

    <p>Earlier, the concept of heat capacity was introduced. Time to to introduce a new character: heat capacity at 
    constant volume, \\(C_V\\). In light of the regular definition of heat capacity, this is the amount of energy
    required to heat something up by 1ºC without allowing the volume to change.
    It is defined mathematically like this</p> 

    <div class="hover-wrapper">
      <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
          <p>\\( C_V = \\frac{1}{n} \\frac{dQ}{dT} \\)</p>
        </div>
        <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
        Formula 2: Heat Capacity at constant volume</div><div style="color:white; font-size:20px">
        amount of energy required to heat something up <br> by 1ºC without allowing the volume to change.</div></span>
      </div>
    </div>
    
    <p>This may look quite arbitrary at first, but it actually matches the definition pretty well. If you think about it,
    heat capacity at constant volume is the <strong>energy</strong> (hence, \\(dQ\\)) for <strong> each mole</strong>
    (hence dividing by \\(n\\), or \\(\\frac1{n}\\)) <strong> per unit of temperature </strong> you want to increase 
    it by (hence dividing by \\(dT\\)). </p>

    <p>(And BTW, according to Qwen AI, technically it should be \\(\\delta Q\\) rather than just \\(dQ\\), because heat is
    a path function and therefore this is an improper differential. As a physicist tho, I could not care less.)

    <p>Now remember way way earlier, we said that heat energy, \\(Q\\), is related to the internal energy, which itself
    is essentially the kinetic energy of the particles. That means in this case, we could technically just replace 
    \\(Q\\) with \\(K_{\\text{tr}}\\). We already learnt before that:</p>

    <p>\\(K_{\\text{tr}}=\\frac32k_BT\\)</p>

    <p>For n moles, we can use our ideal gas equations, replacing \\(k_BT\\) with nRT. This means:</p>

    <p>\\(K_{\\text{tr}}=\\frac{3n}2RT\\)</p>

    <p> And like I said earlier, we are assuming that all the heat energy which goes in becomes translational kinetic
    energy, or in other words, \\(Q=K_{\\text{tr}}\\). That means we can replace the \\(Q\\) in our equation for 
    \\(C_V\\), and therefore we get:
      
    <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\(C_V=\\frac{1}{n} \\frac{dK_{\\text{tr}}}{dT}=\\frac{3}{2} R = 12.47 \\, 
              \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>

    <p>Well ain't that something! We now have an exact value for \\(C_V\\)! That is so amazing! I mean, the only thing
    left to do now is actually measure it and see if the theoretical value matches the actual value.</p>

    <p>Introducing our first three contestants, Helium, Argon and Neon. Let's see what their heat capacity is at
    constant volume.</p>
    
    <p>For Helium, \\( C_V = 12.5 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>
    <p>For Neon, \\( C_V = 12.7 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>
    <p>For Argon, \\( C_V = 12.5 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>

    <p>Hey, not bad! It looks like our calculation is accurate, or at least close enough. And it looks like we have four
    more contestants! Krypton, Nitrogen, Hydrogen and Oxygen. Let's see wagwan now:</p>

    <p>For Krypton, \\( C_V = 12.3 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>

    <p>So far so good!</p>

    <p>For Nitrogen, \\( C_V = 20.8 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>
    <p>For Hydrogen, \\( C_V = 20.4 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>
    <p>For Oxygen, \\( C_V = 21.1 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\).</p>

    <p>...Huh? What happened? It was going so well. Why did it stop working?</p>
    <p>Well, let's look carefully. Helium, Neon, Argon and Krypton all seem to work just fine. But when I go to Nitrogen,
    Hydrogen and Oxygen, it shoots up to \\( C_V \\approx \\frac{5}{2} R \\). I wonder, do N₂, O₂ and H₂ have something 
    in common that He, Ne, Ar and Kr don't?</p>
    <p>Eureka! That's it!</p>
    <p>Helium, Neon, Argon and Krypton are all monotomic gases, meaning they are all made of one single atom. But Nitrogen,
    Hydrogen and Oxygen, are all made up of <strong>two</strong> atoms (hence why they have cute little 2's after their 
    letters).</p>
    <p>Why does this matter?</p>

    <h3>Equipartition of Energy</h3>

    <p>I find this quite cool. The <strong>equipartition theorem</strong> says that every quadratic degree of freedom 
    gets \\( \\frac{1}{2} k_B T \\) per molecule. In other words, for each different way that an atom or molecule can
    wiggle and jiggle, it gains an additional \\( \\frac{1}{2} k_B T \\) attack points (that's Yu-Gi-Oh-nese for
    energy).</p>
    <p>Whsat does that mean? In the case of our monotomic gases, they can only move in three ways: translation in the
    \\(x\\)-direction, translation in the \\(y\\)-direction, and translation in the \\(z\\)-direction. This gives
    them \\( 3 \\times \\frac{1}{2} k_B T = \\frac{3}{2} k_B T\\), which can converted into \\(C_V\\) 
    to be \\(\\frac{3}{2} R\\). However, diatomic gases can also rotate. They can rotate about the \\(y\\)-axis 
    and about the \\(z\\)-axis, giving them another \\( 2 \\times \\frac{1}{2} k_B T = k_B T\\), which becomes an
    increase of \\(R\\) in \\(C_V\\), becoming \\(\\frac{5}{2} R\\).</p>
    <p>And I know what you're thinking, "but hold on, can't <em>all</em> molecules and atoms rotate?"</p>
    <p>Well, twchnically yes. But to make it easier to understand why some don't work, think back to like, Year 8,
    when atoms were drawn like literal solid spheres. With that image in mind, try rotating a single sphere.</p>
    <p>Whilst you obviously can do it, nothing really has changed. It still looks the exact same. Therefore, as
    far as our model is concerned, it's only wasting our time. It may as well be doing nothing. Apply the same logic
    to rotation about the \\(x\\)-axis and you se why it don't do nothing.</p>

    <p>And there is one more thing whe can consider: vibration! And at first you might think "isn't vibration just 
    translation?" To which I say, yes, yes it is, but this one is <em>slightly different</em>. Unlike the rotation
    before, where the whole molecule was moving, this describes each atom within the molecule moving by themselves.
    This can obviously only have any meaningful consequence for diatomic molecules, where it basically looks like the
    molecule is being stretched and squashed.</p>
    <p>In this case, both kinetic and potential energy can contribute to the stretching, and each contributing form
    of enegry gives the molecule an additional \\( \\frac{1}{2} k_B T \\) attack points, or \\(k_B T \\) in total. </p>
    <p>However, this vibration only works at high enough temperatures. At low temperatures, vibration doesn't do
    anything.</p>
    <p>So the total for a diatomic molecule at a high temperature, \\( C_V = \\frac{7}{2} R \\)</p>

    <p>So:</p>
    <ul>
      <li><strong>Translation</strong>: 3 modes → \\( \\frac{3}{2} k_B T \\)</li>
      <li><strong>Rotation</strong>: 2 modes (diatomic) → \\( k_B T \\)</li>
      <li><strong>Vibration</strong>: 2 modes (KE + PE) → \\( k_B T \\) per mole</li>
    </ul>

    

    <h3>Heat Capacity of Solids</h3>

    <p>In solids, atoms vibrate in 3D. Each direction contributes \\( k_B T \\) per atom (KE + PE).</p>

    <p>So total: \\( 3R \\) per mole.</p>

    <p>\\( C_V = 3R = 24.9 \\, \\text{J mol}^{-1}\\text{K}^{-1} \\)</p>

    <p>This is the <strong>Dulong-Petit rule</strong>. Works well at high temperatures.</p>

    <p>But at low T? Heat capacity drops. Why? Quantum mechanics.</p>

    <p>Vibrational modes get “frozen out” as \\( T \\) decreases. No energy to excite them.</p>

    <p>So classical physics fails. Again.</p>

    <h3>TL;DR</h3>

    <ul>
      <li>Ideal gas law: \\( pV = nRT \\) — works until liquefaction</li>
      <li>van der Waals: fixes volume and attraction → \\( (p + an^2/V^2)(V - nb) = nRT \\)</li>
      <li>Phase diagrams: triple point, critical point, supercritical fluids</li>
      <li>Pressure comes from molecular collisions</li>
      <li>Maxwell-Boltzmann: speed distribution depends on \\( T \\)</li>
      <li>\\( k_B T \\) is the thermal energy scale</li>
      <li>Mean free path: molecules don’t go far before colliding</li>
      <li>\\( C_V \\): monatomic = \\( 3R/2 \\), diatomic = \\( 5R/2 \\) (rotation), solids = \\( 3R \\)</li>
      <li>Equipartition: each degree of freedom gets \\( \\frac{1}{2} k_B T \\)</li>
      <li>Quantum effects freeze out modes at low \\( T \\)</li>
    </ul>

    <p>And remember: for each different way that an atom or molecule can
    wiggle and jiggle, it gains an additional \\( \\frac{1}{2} k_B T \\) attack points</p>
    `
  },
  "thermodynamics1": {
    title: "The First Law of Thermodynamics",
    content: `
    <h3>The First Law of Thermodynamics</h3>

    <p>Unless you're first time learning about physics was yesterday evening, you probably know the first law of
    thermodynamics, even if not by name. It's the classic "energy cannot be created nor destroyed, only transferred.</p>

    <h3>States and Processes: The Drama of p, V, and T</h3>

    <p>Remember our trusty piston? Cylinder. Movable lid. Gas inside. Number of molecules fixed. That’s our system.</p>

    <p>The <strong>state</strong> of the system is defined by its variables:</p>
    <ul>
      <li><strong>Pressure (p)</strong> — intensive</li>
      <li><strong>Volume (V)</strong> — extensive</li>
      <li><strong>Temperature (T)</strong> — intensive</li>
      <li><strong>Internal energy (U)</strong> — extensive</li>
    </ul>

    <p>“Intensive” means it doesn’t care how big your system is. “Extensive” means it does.</p>

    <p>Now, when we change the system — say, push the piston, or heat it up — we go through a <strong>process</strong>.
    There are four common ones, and it's worth getting used to the names as soon as possible, so that you don't have to
    go back into your notes every time the word pops up.</p>
    <ul>
      <li><strong>Isobar</strong>: This means pressure is kept constant</li>
      <li><strong>Isochore</strong>: This means volume is kept constant (so no work)</li>
      <li><strong>Isotherm</strong>: This means temperature is kept constant. TThis is probably the easiest one to
      remember, because, y'know, iso<b>therm</b>, like thermal, heat?</li>
      <li><strong>Adiabat</strong>: No heat transfer whatsoever (Q = 0)</li>
    </ul>

    <p>Each one has its own rules. Its own drama. Its own place on the pV diagram.</p>

    <h3>The First Law: ∆U = Q – W </h3>

    <p>The formal definition of the First Law is:</p>

      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>\\( \\Delta U = Q - W \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 1: First Law of Thermodynamics</div><div style="color:white; font-size:20px">
          The change of internal energy is the (heat) energy in, <br> take away the (work done) energy out.</div></span>
        </div>
      </div>
    

    <p>Where:</p>
    <ul>
      <li>\\( \\Delta U \\) is the change in internal energy</li>
      <li>\\( Q \\) is the heat added <em>to</em> the system</li>
      <li>\\( W \\) is the work done <em>by</em> the system</li>
    </ul>

    <p>Now just, for the record, in some textbooks, they define the first law as \\( \\Delta U = Q + W \\),
    using a plus instead of a minus. That's just one of the many cases of scientists not being able to agree on a 
    bloody convention, so some people define \\(W\\) as the work done <em>on</em> the system instead of work done
    <em>by</em> the system. At Warwick Uni, we use the latter (\\(W\\) is the work done <em>by</em> the system),
    a convension known as the <strong>Clausius convention</strong> and the one Young and Freedman use. So if you see 
    \\( \\Delta U = Q + W \\) somewhere, now you know why. So don’t get confused. Pretty please with a cherry on top. TY!</p>

    <p>So:</p>
    <ul>
      <li>Heat in → \\( Q > 0 \\)</li>
      <li>Heat out → \\( Q < 0 \\)</li>
      <li>Work done <em>by</em> system → \\( W > 0 \\)</li>
      <li>Work done <em>on</em> system → \\( W < 0 \\)</li>
    </ul>

    <p>Protip: The whole <em>by</em> verses <em>by</em> situation can get quite confusing, with or without the stupidity
    of scientific naming conventions. So if it's your first time doing this kinda stuff, it could be worth explicitly
    making it known to yourself whether a certain transfer is done <em>by</em> the system or not, and why. You're
    welcome! </p>

    <p>Energy is conserved. Always. But it can move around.</p>

    <h3>Work: The pV Diagram Tells the Story</h3>

    <div class="container">
      <div class="text">
          <p>Work is done when the gas expands and pushes the piston. For every teeny-tiny change in the distance from you pushing
          or pulling the piston,\\( dx \\), work is done \\( dW = F dx \\), which is either positive or negative depending on
          whether the piston was pushed in (done <em>on</em>, negative) or pushed out out (done <em>by</em>, positive).</p>

          <p>But \\( F = pA \\), and \\( Adx = dV \\), so:</p><br>

          <p>\\( dW = p  dV \\)</p><br>

          <p>We can now integrate over a path:</p><br>

          <div class="hover-wrapper" style="left:100px;">
            <div class="formula-container">
              <div class="formula-box" style="text-align: center; color: var(--text); margin: auto; ">
                <p>\\( W = \\int_{V_1}^{V_2} p  dV \\)</p>
              </div>
              <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
              Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
              Formula to calculate length for a bar stationary in the moving frame</div></span>
            </div>
          </div>
          
      </div>
      <div class="image">
        <div class="image-floater">
          <div class="image-box">
            <img src="images/Thermal Physics/Piston.png" class="pop-image" style="width: 300px"/>
          </div>
          <span class="image-tooltip" style="left:-120%;"> <div class="image-tooltip-title">
            Figure 1: Cylinder and piston</div><div class="image-tooltip-desc">
            The adiabats appear steeper than the isotherms</div></span>
        </div>
      </div>
    </div>

    <p>This is the **area under the curve** on a pV diagram. And unfortunately, the bloody path actually matters. Work 
    is <strong>not a state function</strong>, so it depends on how you get from A to B.</p>

    <h3>Isothermal Expansion: When ∆U = 0</h3>

    <p>Hopefully you remember which process isothermal is: No change in temperature. One thing always worth having in
    the back of your mind is that, in the isothermal process, since there is no change in temperature, the particles
    in the system don't change their vibration speed. This means their internal energy isn't changing, or in 
    mathematicianese: </p>

    <p>\\( \\Delta U = 0 \\)</p>

    <p>Because \\( U = \\frac{3}{2}nRT \\), and \\( T \\) is constant.</p>

    <p>Now since we are obviously operating the piston by having it move inwards or outwards, the volume is going to
    be changing. Therefore, work is done:</p>

    <p>\\( W = \\int_{V_1}^{V_2} p  dV = \\int_{V_1}^{V_2} \\frac{nRT}{V} dV = nRT \\ln\\left(\\frac{V_2}{V_1}\\right) \\)</p>

    <p>Then from the First Law:</p>

    <p>\\( Q = W \\)</p>

    <p>To translate this into words, when we operate a piston without changing the temperature, the heat we put into the
    system is the same as the work done by the system. So the gas absorbs heat equal to the work it does. No change in 
    energy — just a transfer.</p>

    <p>And looking at the ideal gas equation, if \\(pv=nRT\\), then since \\(n\\) is the number of moles trapped in the
    piston (which we assumed earlier can't change), \\(R\\) is just a constant, and we have decided that temperature is
    not changing (so \\(T\\) is constant too), that means that \\(nRT\\) is a constant. In conclusion:</p>
    
      <div class="hover-wrapper">
        <div class="formula-container">
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            <p>For the isotherm, <br>\\( pV = \\text{constant} \\) </p>

          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 1: First Law of Thermodynamics</div><div style="color:white; font-size:20px">
          The change of internal energy is the (heat) energy in, <br> take away the (work done) energy out.</div></span>
        </div>
      </div>
    
    <h3>Adiabatic Expansion</h3>

    <p>Do you remember what the adiabatic process is? It's when there is no heat transfer, so \\( Q = 0 \\). Going back
    to Wquation 1, we now have:</p>

    <p>\\( \\Delta U = -W \\)</p>

    <p>All the work done comes from internal energy, meaning the internal energy will decrease as the work is done. Since
    internal energy corresponds to temperature, less internal energy means the gass cools down. Moreover, since W is 
    negative, it means that work is done <em>on</em> the system.</p>

    <p>Now, using \\( dU = nC_V dT \\) and \\( dW = p dV \\), we get:</p>

    <p>\\( nC_V dT = -p dV \\)</p>

    <p>By substituting \\( p = nRT/V \\) and then rearranging, we now have:</p>

    <p>\\( \\frac{dT}{T} = -\\frac{R}{C_V} \\frac{dV}{V} \\)</p>

    <p>Let \\( \\gamma = C_P / C_V \\), and \\( R = C_P - C_V \\), so \\( R/C_V = \\gamma - 1 \\)</p>

    <p>Then integrate:</p>

    <p>\\( \\ln T + (\\gamma - 1) \\ln V = \\text{constant} \\)</p>

    <p>So:</p>

    <div class="container">
      <div class="text">
        <div class="hover-wrapper" style="left: 100px;">
          <div class="formula-container">
            <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
              <p>For the adiabat:</p>
            
              <p>\\( T V^{\\gamma - 1} = \\text{constant} \\)</p><br>

              <p>Using \\( pV = nRT \\), we also get:</p><br>

              <p>\\( p V^\\gamma = \\text{constant} \\)</p>
            </div>
            <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
            Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
            Formula to calculate length for a bar stationary in the moving frame</div></span>
          </div>
        </div><br><br>


        <p>Which means the adiabat is <strong>steeper</strong> than the isotherm on a pV diagram. Because \\( \\gamma > 1 \\),
        and that's true here in thermal physics, not just in relativity. Apparently gammas make it a point to be more
        than one, regardless of where they are.</p>
      </div>
      <div class="image">
        <div class="image-floater">
          <div class="image-box">
            <img src="images/Thermal Physics/Adiabat vs Isotherm.png" class="pop-image" style="width: 300px"/>
          </div>
          <span class="image-tooltip" style="left:-120%;"> <div class="image-tooltip-title">
            Figure 1: Adiabats VS Isotherms on a p-V graph</div><div class="image-tooltip-desc">
            The adiabats appear steeper than the isotherms</div></span>
        </div>
      </div>
    </div>

    <h3>Work Along the Adiabat: W = –nC_V ∆T</h3>

    <p>Since \\( \\Delta U = -W \\) and \\( \\Delta U = nC_V \\Delta T \\), then:</p>

    <p>\\( W = -nC_V (T_2 - T_1) \\)</p>

    <p>Even though volume changes, we use \\( C_V \\), not \\( C_P \\). Because it’s the change in internal energy 
    that matters — and for an ideal gas, \\( U \\) only depends on \\( T \\).</p>

    <p>So yes — it works. Even when \\( V \\) isn’t constant.</p>

    <h3>Heat Capacity: C_V vs C_P</h3>

    <p>We already know:</p>

    <p>\\( C_V = \\frac{1}{n} \\frac{dQ}{dT} \\quad \\text{(at constant volume)} \\)</p>

    <p>But what about \\( C_P \\)? That’s at constant pressure. When pressure is constant, work is done: 
    \\( W = p \\Delta V \\)</p>

    <p>So from the First Law:</p>

    <p>\\( dQ = dU + p dV \\)</p>

    <p>Then:</p>

    <p>\\( n C_P dT = n C_V dT + p dV \\)</p>

    <p>But \\( p dV = nR dT \\) (from ideal gas law)</p>

    <p>So:</p>

    <p>\\( C_P = C_V + R \\)</p>

    <p>And for monatomic gases: \\( C_V = \\frac{3}{2}R \\), so \\( C_P = \\frac{5}{2}R \\), \\( \\gamma = 5/3 \\)</p>

    <p>For diatomic: \\( C_V = \\frac{5}{2}R \\), \\( C_P = \\frac{7}{2}R \\), \\( \\gamma = 7/5 \\)</p>

    <h3>Summary of Processes</h3>

    <h4>Isothermal</h4>
    <ul>
      <li>\\( \\Delta T = 0 \\), \\( \\Delta U = 0 \\)</li>
      <li>\\( pV = \\text{constant} \\)</li>
      <li>\\( W = nRT \\ln(V_2/V_1) \\)</li>
      <li>\\( Q = W \\)</li>
    </ul>

    <h4>Adiabat</h4>
    <ul>
      <li>\\( Q = 0 \\)</li>
      <li>\\( pV^\\gamma = \\text{constant} \\)</li>
      <li>\\( TV^{\\gamma-1} = \\text{constant} \\)</li>
      <li>\\( W = -nC_V \\Delta T \\)</li>
      <li>\\( W = -\\frac{1}{\\gamma - 1}(p_2 V_2 - p_1 V_1) \\)</li>
    </ul>

    <h4>Isochore</h4>
    <ul>
      <li>\\( \\Delta V = 0 \\)</li>
      <li>\\( W = 0 \\)</li>
      <li>\\( Q = nC_V \\Delta T \\)</li>
    </ul>

    <h4>Isobar</h4>
    <ul>
      <li>\\( \\Delta p = 0 \\)</li>
      <li>\\( W = p \\Delta V \\)</li>
      <li>\\( Q = \\Delta U + p \\Delta V = nC_P \\Delta T \\)</li>
    </ul>

    <h3>TL;DR</h3>

    <ul>
      <li>First Law: \\( \\Delta U = Q - W \\) — energy conserved</li>
      <li>Work: \\( W = \\int p  dV \\) — area under pV curve</li>
      <li>Isothermal: \\( \\Delta U = 0 \\), \\( Q = W \\), \\( pV = \\text{const} \\)</li>
      <li>Adiabatic: \\( Q = 0 \\), \\( \\Delta U = -W \\), \\( pV^\\gamma = \\text{const} \\)</li>
      <li>\\( C_P = C_V + R \\)</li>
      <li>Work on adiabat: \\( W = -nC_V \\Delta T \\)</li>
      <li>Path matters — work and heat are not state functions</li>
      <li>Make an effort to remember the different processes</li>
    </ul>

    <p>And remember: the universe doesn’t care how hard you try.  
    It only cares about energy conservation.</p>


    `,
  },
  "thermodynamics2": {
  title: "The Second Law of Thermodynamics",
  content: `
    <h3>The Second Law of Thermodynamics</h3>

    <p>Right. Let’s talk about the <strong>Second Law</strong>.</p>

    <p>No, not the one about robots not hurting people. We’re talking about <strong>thermodynamics</strong> — the universe’s way of saying:</p>

    <blockquote>“<em>You can’t win. You can’t break even. You can’t even get out of the game.</em>”</blockquote>

    <p>It’s not about energy conservation — that’s the First Law.</p>

    <p>No, the Second Law is about <strong>direction</strong>. About <strong>irreversibility</strong>. About why you can’t un-burn wood, un-mix coffee, or un-splash water.</p>

    <p>It’s the law of <strong>disorder</strong>. And it’s coming for you.</p>

    <h3>Two Ways to Say It: Kelvin-Planck vs Clausius</h3>

    <p>There are two classic ways to state the Second Law — and both say the same thing in different ways, that
    the universe wants money, and you can't avoid paying it.</p>

    <h4>Kelvin-Planck (The “Engine” Statement)</h4>

    <p>You’ve got a heat engine, which takes in heat from a hot reservoir, does work, and dumps waste heat into 
    a cold reservoir. But what if we made an engine which produces no waste heat at all? An engine which is
    100% efficient?!</p>

    <p>That would revolutionise sustainable energy in the modern world, and probably make you rich. If you were somehow
    able to extract it from make-believe land, that is.</p>

    <p>It is impossible to make an engine with <em>no</em> waste heat. And it isn't just due to a limitation of 
    energy efficient materials, it is scientifically not possible for an engine like the one just described (or any
    type of engine, in fact) to be completely efficient.</p>

    <p>\\( Q_C \\neq 0 \\) — there’s always waste heat.</p>

    <p>So the engine can’t be perfectly efficient. The universe demands a tax.</p>

    <h4>Clausius (The “Fridge” Statement)</h4>

    <p>For those of us who have been on planet earth for long enough, we know that cold things will always warm up
    when they are in an environment which is warmer than it. It's also fairly obvious that cold things in said
    environment don't get colder, unless you apply some form of work to make it do so.</p>

    <p>That’s what fridges do — they use energy to pump heat from cold to hot. So yes, it’s possible — but only if 
    you pay the universe a fee.</p>


    <h3>Heat Engines</h3>

    <p>A heat engine runs in a cycle. It starts off with taking in heat energy \\( Q_H \\) from a hot reservoir. 
    The engine then uses as much if that heat it can to do work, \\( W \\). Finally, once it has done all the work it 
    can do, the remaining wasted heat, \\( Q_C \\), is thrown into a cold reservoir.</p>

    <p>In this case, we can say that the, I suppose scientifically relevant heat in, \\(Q\\), is the heat energy it took
    in from the hot reservoir, \\( Q_H \\), take away the energy which was wasted and sent to the cold reservoir, 
    \\( Q_C \\), id est \\( Q = Q_H - |Q_C| \\). Since, in the end, all the heat energy the engine gained ends up
    leaving it somehow (either as work done or by being sent to the cold reservoir), the engine itself doesn't actually
    gain or loose any heat energy. This means its internal energy doesn't change, or \\( \\Delta U = 0 \\) over a cycle. 
    Then by using the first law, \\( W = Q_H - |Q_C| \\)</p>

    <p>Efficiency, \\( \\varepsilon\\), is calculated by taking how much work was done by the engine, \\(W\\), and 
    dividing it by how much energy we actually gave it, \\(Q_H\\). This gives us a decimal less than one (or a 
    percentage less than 100%) as per the second law.</p>

    <p>\\( \\varepsilon = \\frac{W}{Q_H} = 1 - \\frac{|Q_C|}{Q_H} \\)</p>

    <p>(If you can't tell, the second part of the formula comes from using \\( W = Q_H - |Q_C| \\)).</p>

    <h3>The Carnot Cycle</h3>

    <p>Enter the <strong>Carnot cycle</strong> — the most efficient heat engine possible.</p>

    <p>It’s not real. It’s ideal. It’s like a physics thought experiment on steroids.</p>

    <p>It has four stages:</p>
    <ol>
      <li><strong>A→B</strong>: Isothermal expansion at \\( T_H \\). Remember that isothermal means the temperature
      doesn't change, meaning the internal energy doesn't change, \\( \\Delta U = 0 \\). This means the heat in is 
      the same as the work out, as per the first law: \\( W_{AB} = Q_{AB} \\). We also know from earlier that the
      work done in the isothermal process is \\(nRT_H\\ln{\\frac{V_1}{V_2}}\\)</li>
      <li><strong>B→C</strong>: Adiabatic expansion.  Remember that adiabatic means that there is no heat transfer,
      \\( Q_{BC} = 0 \\), so as per the first law, \\( \\Delta U = -W \\). We also know that in the adiabatic process,
      the work done is \\(W_{BC}=-nC_V(T_C-T_H)\\) as the gas cools from \\( T_H \\) to \\( T_C \\)</li>
      <li><strong>C→D</strong>: Isothermal compression at \\( T_C \\). Pretty similar to the first isotherm, in that
      \\( \\Delta U = 0 \\) and so \\( W_{CD} = Q_{CD} \\). The work done is almost the same, but done <em>on</em> 
      the system this time, with \\(W_{CD} = nRT_H\\ln{\\frac{V_3}{V_4}}\\).</li>
      <li><strong>D→A</strong>: Adiabatic compression. Simalar again to the previous adiabat, \\( Q_{DA} = 0 \\),
      \\( \\Delta U = -W \\), so \\(W_{DA}=-nC_V(T_H-T_C)=-W_{BC}\\) as it heats back to \\( T_H \\)</li>
    </ol>

    <p>For each part of the process, we have a value for internal energy, work done, and heat flow. Let's add 'em
    up to get a total for the whole cycle:</p>

    <p>The total internal energy is \\(0-nC_V(T_C-T_H)+0+-nC_V(T_H-T_C)=0\\)</p>
    <p>The total heat flow is \\(nRT_H\\ln{\\frac{V_1}{V_2}}+0+nRT_H\\ln{\\frac{V_3}{V_4}}+0
    = nRT_H\\ln{\\frac{V_1}{V_2}}+nRT_C\\ln{\\frac{V_3}{V_4}}\\). But we know from before that
    \\(\\frac{V_1}{V_2}=\\frac{V_3}{V_4}\\), which means that \\(Q=nR(T_H-T_C)\\ln{\\frac{V_1}{V_2}}\\).</p>
    <p>And we've proven that the heat energy in is the same as the work done, which makes sense, as we are
    assuming 100% efficiency, meaning none of the energy ends up in the shadow realm. So
    \\(W=nR(T_H-T_C)\\ln{\\frac{V_1}{V_2}}\\)

    <p>My top tip, when trying to figure out all these values, always start with determining what is equal to
    zero first. We know that in the isothermal process, temperature doesn't change so \\( \\Delta U = 0 \\). We
    also know that in the adiabatic process, there is no heat transfer so \\( Q = 0 \\). Next you plug that
    into the First Law of Thermodynamics, from which you can determine which other factors are equal to each
    other. I recommend basically learning to derive these manually rather than memorising them.</p>

    <p>Oh yes, the efficiency. We know from earlier that </p>

    <p>\\( \\varepsilon = 1 - \\frac{|Q_C|}{Q_H} \\)</p>
    <p>If we then plug in our formulae for \\(W\\) and \\(Q_H\\), we get:</p>
    <p>\\( \\varepsilon = 1 - \\frac{|nRT_C\\ln{\\frac{V_3}{V_4}}|}{nRT_H\\ln{\\frac{V_1}{V_2}}} \\)</p>
    <p>Remember that \\(\\frac{V_1}{V_2}=\\frac{V_3}{V_4}\\), then do a bit of cancellation:,/p>

    <p>\\( \\varepsilon_\\text{carnot} = 1 - \\frac{T_C}{T_H} \\)</p>

    <p>Where temperatures are in <strong>Kelvin</strong> — because the universe doesn’t like Celsius.</p>

    <p>This is the <strong>Carnot efficiency</strong>, which is the maximum theoretical yield you can get from an
    engine with a hot reservoir with temperature \\(T_H\\) and a cold reservoir with temperature \\(T_C\\).</p>

    <p>Real engines? They’re worse. Always.</p>

    <h3>Reversible vs Irreversible</h3>

    <p>Reversible processes are the dream. They happen infinitely slowly, with no friction, and no energy is wasted. 
    You could run them backwards and no one would know. And once again would be worth quite a lot of money if we could
    extract them from the world of make-believe. Because all real processes are irreversible processes.</p>

    <p>The Carnot cycle is reversible, which is why it’s the most efficient. But Carnot engines ain't real, so it'd
    kinda just a scientific thought experiment. All real engines are less efficient.</p>

    <p>And if you still don't believe me when I say the Carnot cycle is actually just nonsense, let me prove it to
    you. The first step in the cycle was of course <strong>isothermal expansion</strong>, meaning the temperature doesn't
    change. But if the temperature doesn't change and the temperature of the hot reservoir is the same as the temperature 
    of the engine, then no energy will flow at all. This is obviously a problem, because, well, you <em>need</em> energy
    to flow into the engine. I mean, how else do you expect the engine to engine?</p>
    <p>So for the energy to flow, you need the hot reservoir to be kept at a higher temperature than the engine. But now,
    although the energy can flow from hot to cold without a problem, it can't then flow back from the cooler engine
    to the warmer reservoir. Why, you ask? No, seriously, why are you asking why? It's because of the Second Law of 
    Thermodynamics, we've been learning about that all this while, were you not paying attention?</p>
    <p>Anyways, no thanks to you, we know that heat energy cannot flow from cold to hot without some sort of work done.
    But if we <em>do</em> have some work be done, then we will change the surroundings, in which case it's not bloody
    reversible anymore is it?</p>
    <p>Therefore, if the Carnot cycle were to work, then we'd need the hot reservoir to be hotter than the engine by
    an <em>infinitesimally small amount</em>, so small that energy can still sort of flow, but the Second Law of
    Thermodynamics doesn't notice. This would mean that energy will take infinite time to flow from the hot reservoir
    to the engine. Although we have another problem now...</p>
    <p>Ain't nobody got time for that.</p>
    <p>In case you didn't notice, eternity is a pretty long time, and way longer than I care to wait. So in short, no
    the Carnot cycle is impossible, just like I bloody said the first time.</p>


    <h3>TL;DR</h3>

    <ul>
      <li>Second Law: you can’t convert all heat into work (Kelvin-Planck)</li>
      <li>You can’t move heat from cold to hot without work (Clausius)</li>
      <li>Heat engines: \\( \\varepsilon = 1 - |Q_C|/Q_H \\)</li>
      <li>Carnot efficiency: \\( \\varepsilon = 1 - T_C/T_H \\)</li>
      <li>Reversible processes are ideal — real ones are irreversible</li>
      <li>The universe has a direction: forward</li>
    </ul>

    <p>And remember: infinity is a long bloody time....</p>
    `,
  },
  "entropy": {
  title: "Entropy",
  content: `
    <h3>Entropy</h3>

    <p>Building on from the Second Law of Thermodynamics (which you forgot about, smh...), I think it's time to talk
    about <strong>entropy</strong>!!!</p>

    <p><i>(Goodness gracious me, you <strong>think</strong> it's time? What gave it away, the big blue floating 
    underlined title which says "entropy"?</i></p>

    <p>Remembering back, we now know that energy spontaneously flows from cold to hot, thus increasing the internal energy
    of the previously cold particles. We also know that an increase in internal energy pertains to an increase in
    kinetic energy, which in turn pertains to how spazticated the molecules are - or in other words, how <strong>
    chaotic</strong> the particles are. <i>Remember this, it'll be important soon</i>.</p>

    <p>Now we can think of the Second Law in terms of particle spaztication. Since energy spontaneously flows to
    colder, less spazticated areas, we can in a way say that the universe naturally tries to spazticate everything.
    Or in other words, the universe tends towards disorder / chaos.</p>


    <h3>What Is Entropy?</h3>

    <p>Believe it or not, spaztication is a legitimate scientific quantity. Granted, they don't typically call
    it spaztication, they instead call it entropy. However, in my defence, entropy is literally represented with an
    \\( S \\). Even Google will tell you that no-one knows why Rudolf Clausius chose the letter \\( S \\). So if
    I say \\( S \\) is for spaz, who are you to tell me I'm wrong? Bruv your guess is as good as mine! So for 
    future reference, I will switch between 'entropy' and 'spaztication', but know I'm on about the same thing.</p>
    
    <p> Entropy is a measure of <strong>disorder</strong> or <strong>randomness</strong> withing a system, with
    low entropy meaning more ordered and high entropy meaning less ordered.</p>

    <p>And the Second Law can be interpreted as saying that <strong>the total entropy of the universe never 
    decreases</strong>. It either stays the same (if it's reversible, which it won't be, 'cus it ain't flipping
    possible) or increases (irreversible).</p>

    <p>You may wonder, why does the universe love chaos so much? Well, maybe it doesn't. Perhaps there's a better
    of thinking about it. In any given system, there are practically infinite ways that particles could choose to
    arrange themselves. Of those bajillion ways they could arrange themselves, probably less than 1% of them are 
    going to be considered 'ordered'. And despite us usually describing the universe as sentient, the universe 
    can't actually tell the difference. So going purely off statistics, it's more likely to eventually end up 
    in a mess than in a tidy little bundle.</p>

    <h3>Quantitative Definition</h3>

    <p>We define a small change in spaztication as:</p>

    <p>\\( dS = \\frac{dQ_{\\text{rev}}}{T} \\)</p>

    <p>Where:</p>
    <ul>
      <li>\\( dQ_{\\text{rev}} \\) is the heat added in a <strong>reversible</strong> process</li>
      <li>\\( T \\) = temperature in Kelvin</li>
    </ul>

    <p>So for a finite process:</p>

    <p>\\( \\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T} \\)</p>

    <p>If \\( T \\) is constant (an isothermal process), this simplifies to:</p>

    <p>\\( \\Delta S = \\frac{Q}{T} \\)</p>

    <h3>Reversible vs Irreversible Processes</h3>

    <p>In a <strong>reversible</strong> process, \\( \\Delta S = 0 \\) for the universe.</p>

    <p>In an <strong>irreversible</strong> process, \\( \\Delta S > 0 \\).</p>

    <p>Example: free expansion of gas.</p>

    <p>You’ve got gas in one side, vacuum in the other. You break the wall — gas expands into the vacuum.</p>

    <p>No work. No heat. No \\( \\Delta T \\). But entropy increases.</p>

    <p>Why? Because the gas now has more space — more ways to be arranged.</p>

    <p>So even though \\( Q = 0 \\), \\( \\Delta S > 0 \\).</p>

    <p>We calculate it by imagining a reversible path (isothermal expansion) and using:</p>

    <p>\\( \\Delta S = nR \\ln(V_2/V_1) \\)</p>

    <p>For \\( V_2 = 2V_1 \\), \\( \\Delta S = nR \\ln 2 \\)</p>

    <h3>Isentropic = Adiabatic + Reversible</h3>

    <p>If a process is both adiabatic (\\( Q = 0 \\)) and reversible, then \\( \\Delta S = 0 \\).</p>

    <p>This is called an <strong>isentropic</strong> process.</p>

    <p>Like in the Carnot cycle — adiabatic expansions and compressions are isentropic.</p>

    <h3>TL;DR</h3>

    <ul>
      <li>Entropy = measure of disorder</li>
      <li>\\( \\Delta S_{\\text{universe}} \\geq 0 \\) — never decreases</li>
      <li>\\( dS = dQ_{\\text{rev}} / T \\)</li>
      <li>Irreversible processes increase entropy</li>
      <li>Free expansion → entropy increases even if \\( Q = 0 \\)</li>
      <li>Isentropic = \\( \\Delta S = 0 \\) → adiabatic + reversible</li>
    </ul>

    <p>And remember: \\( S \\) is for spaz.</p>
    
    `,
  },
  "thermal-summary": {
  title: "Turn up the heat, Soulburner!",
  content: `

    `,
  },

    // Subtopics for Wave Phenomena
  "waves-intro": {
    title: "Introduction to Waves: Wibble-wobble wibble-wobble",
    content:`
    <h3>Wave Phenomena</h3>

    <p>Right. Let’s talk about <strong>waves</strong>.</p>

    <p>No, not the kind you do at a football match. We’re talking about <strong>physics waves</strong> — the kind that carry energy without carrying stuff.</p>

    <p>Think: sound. Light. Earthquakes. Ripples on a pond. Your phone vibrating because someone’s texting you at 3am.</p>

    <p>All of these? Waves. And they come in three flavours:</p>
    <ul>
      <li><strong>Mechanical waves</strong>: need a medium. Like sound in air, or waves on a slinky.</li>
      <li><strong>Electromagnetic waves</strong>: don’t need a medium. Light, X-rays, radio — they travel through vacuum like they own the place.</li>
      <li><strong>Matter waves</strong>: the quantum kind. Where particles act like waves. But we’ll save that for later — you’ve got enough on your plate.</li>
    </ul>`

  },
  "wave-phenomena": {
    title: "The wave function",
    content: `
  
    <h3>The Wavefunction: U(x, t)</h3>

    <p>To describe a wave, we need a function that depends on both <strong>position</strong> and <strong>time</strong>.</p>

    <p>Enter: \\( U(x, t) \\).</p>

    <p>It tells you the displacement of the wave at position \\( x \\) and time \\( t \\).</p>

    <p>Now some of you might be thinking (or at least I was when my lecturer mentioned this, IDK maybe I'm just a nerd...),
    "Hold on, U? Isn't the wave function supposed to be \\(\\Psi\\)? </p>
    <p>Short answer, no. Or at least not yet. We <em>will</em> be using Psi as the wavefunction during the
    <a href="http://127.0.0.1:5500/topic.html?topic=quantum1">Quantum Phenomena</a> section, but for now, we will just
    be using U. Why they have two different letters for something which describes the same thing? God knows. But 
    whatevs, moving on...</p>


    <p>For a simple sinusoidal wave moving to the right:</p>

      <div class="hover-wrapper">
        <div class="formula-container" >
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto; ">
            <p>\\( U(x, t) = A \\cos(kx - \\omega t) \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>
    

    <p>Where:</p>
    <ul>
      <li>\\( A \\) = amplitude (how big the wiggle is)</li>
      <li>\\( k \\) = wavenumber = \\( 2\\pi / \\lambda \\). This is a measure of how squished together the 
      wibble-wobble is</li>
      <li>\\( \\omega \\) = angular frequency = \\( 2\\pi f \\) (How speedy the wibble-wobble is)</li>
    </ul>

    <p>The minus sign assumes that the wave is travelling to the right. If this were a left-travelling wave, you'd use
    a plus sign.</p>

    <h3>Wavespeed</h3>

    <p>The wavespeed is a measure of how quickly a wave's peak (or trough) </p>

    <p>Like, if you flick a slinky, the coils barely go anywhere — but the wave zooms across the room.</p>

    <p>So wavespeed \\( v \\) is:</p>

      <div class="hover-wrapper">
        <div class="formula-container" >
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto; ">
            <p>\\( v = \\frac{\\lambda}{T} = f\\lambda = \\frac{\\omega}{k} \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>

    <p>Some of you may be tempted to say that, since to get a speed from a distance function, we differentiate
    with respect to \\(t\\), then the wave speed must be \\( \\frac{\\partial U}{\\partial t} \\). And if you that, not
    only are you <strong>wrong</strong>, but you're a flipping geek as well. What, you thought that differetiating
    was the correct method, instead of just, oh I dunno, speed = distance over time? Geek...
    <p> If you must know, \\( \\frac{\\partial U}{\\partial t} \\) is actually how fast the medium is moving up and 
    down. So how quickly the bumps go up and down. Now let's be honest, I don't think any of you really thought
    that partial derivatives were the way to go, but the lecutre notes made sure to clarify, so I'm
    also making sure to clarify.</p>

    <h3>Transverse vs Longitudinal</h3>

    <p><strong>Transverse waves</strong>: the medium moves <em>perpendicular</em> to the direction of the wave.</p>
    <ul>
      <li>Example: waves on a string, light</li>
    </ul>

    <p><strong>Longitudinal waves</strong>: the medium moves <em>parallel</em> to the wave.</p>
    <ul>
      <li>Example: sound in air — air molecules squish and stretch along the direction of travel</li>
    </ul>

    <p>In both cases, the medium doesn’t travel with the wave — it just <em>wiggles in place</em>. Like a crowd doing 
    the wave — no one leaves their seat.</p>

    <h3>The Wave Equation</h3>

    <p>The wave equation is a pretty important equation in physics. It comes simply by differenciating the wave function
    twice with respect to time and once with respect to distance. You can do partial differenciation, right? Then this
    should be easy breezy.</p>

    <p>So, in case you've forgotten (or you are just too lazy to scroll up like 10 bloody percent of the page...), the
    wave function is:</p>

    <p>\\( U(x, t) = A \\cos(kx - \\omega t) \\)</p>

    <p>Differentiating twice with respect to time gives us the acceleration of the medium</p>

    <p>\\( \\frac{\\partial^2 U}{\\partial t^2} = -A \\omega^2 \\cos(kx - \\omega t) = -\\omega^2 U(x, t) \\)</p>

    <p>And if you remember, this equation we have here is actually in the form of a simple harmonic oscillator, that
    form being \\( \\frac{d^2x}{dt^2} = -\\omega^2 x \\). So this means that the medium is oscillating in simple 
    harmonic motion. Which is kinda obvious, 'cus that's like, what waves do, but anyways...</p>

    <p>Differentiating twice with respect to the distance gives us... I don't actually know what quantity this would
    be tbh, I believe it refers to curvature in space or something. But I <em>can</em> differentiate, so here it is:</p>
    <p>\\( \\frac{\\partial^2 U}{\\partial x^2} = -A k^2 \\cos(kx - \\omega t) = -k^2 U(x, t) \\)</p>

    <p>Well lookey here! Upon partially differentiating twice with respect to each variable, we now have two equations
    which <em>both</em> still include \\( U(x, t) \\). From there, we can rearrange both equations to get:</p>

    <p>\\( \\frac{\\partial^2 U}{\\partial t^2} = \\frac{\\omega^2}{k^2} \\frac{\\partial^2 U}{\\partial x^2} \\)</p>

    <p>And since we know that \\( \\frac{\\omega}{k} = v \\), we can simplify this to:</p>

      <div class="hover-wrapper">
        <div class="formula-container" >
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto; ">
            <p>\\( \\frac{\\partial^2 U}{\\partial t^2} = v^2 \\frac{\\partial^2 U}{\\partial x^2} \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>

    

    <p>In useful English, this says that the acceleration of the wave (in time) is proportional to its curvature 
    (in space). And this equation works for <em>all</em> waves, left-travelling waves, right-travelling waves, 
    and even standing waves.</p>

    <p>And also, quite interestingly in my opinion, the wave equation for an electromagnetic wave is this:</p>

    <p>\\( \\frac{\\partial^2 E}{\\partial t^2} = \\frac{1}{\\mu_0 \\epsilon_0} \\frac{\\partial^2 E}{\\partial x^2} \\)</p>

    <p>Bearing in mind that the speed squared is the term attached to the partial diferentiation with respect to x, that 
    means that \\(v^2=\\frac{1}{\\mu_0 \\epsilon_0}\\), making the speed \\( v = \\frac{1}{\\mu_0 \\epsilon_0}\\).
    If that sounds familiar then it should, because if you paid attention during the special relativity section, that
    was the value Maxwell proposed for the speed of light. Ain't that something?</p>

    <h3>Superposition</h3>

    <p>Another important thing to consider is the ability to add waves together. The easiest scenario is when you have
    two waves which have the same phase. In that case the peaks align with the peaks and the troughs align with the 
    troughs, which makes the same wave but a bit bigger. However, life isn't that easy, so we're gonna have to do a
    <em>little</em> bit more work than that.</p>
    <p>To begin, remember our original wave equation:</p>
    <p>\\(U(x,t)=A\\cos{kx-\\omega t}\\)</p>
    <p>The little \\(kx-\\omega t\\) within the cosine is what's known as the phase of the wave, which is how far along
    the wave we are. This probably makes sense, considering that the cosine function is itself a wave, in which case
    \\(kx-\\omega t\\) is like the angle. Slight problem though, if we set the conditions \\(x=0\\) and \\(t=0\\), that
    means \\(U(x,t)\\) automatically equals 0. In other words, the wave must always start in the middle. But what
    if I really really <em>really</em> don't want it to start in the middle? I mean I <em>reeeeeally</em> don't
    want it to? Then what?</p>
    <p>The solution is actually quite simple actually, just add one more term, \\(\\phi\\), which tells us where
    abouts the wave begins. So now we have a brand new spanking wave function:</p>
    <p>\\(U(x,t)=A\\cos{kx-\\omega t+\\phi}\\)</p>
    <p>Reminding ourselves that \\(\\phi\\) is an angle, we can give it a value, either between \\(0\\) and \\(2\\pi\\),
    or between \\(-\\pi\\) and \\(\\pi\\).</p>
    <p> We are one step closer to being able to fuse our waves together! But before that, I should introduce a 
    trigonometric equation which should come in handy:</p>
    <p>\\(\\cos{P}+\\cos{Q}=2\\cos{\\frac{P+Q}2}\\cos{\\frac{P-Q}2}\\)</p>

    <p>I'm <em>pretty</em> sure this equation will be given to you in examinations, it's peak for you if it isn't lol.
    Anyways, this formula allows us to add two different cosine waves together. By replacing \\(\\cos{P}\\) and
    \\(\\cos{Q}\\) with \\(A \\cos(kx - \\omega t + \\phi_1) \\) and \\(A \\cos(kx - \\omega t + \\phi_2) \\) to
    indicate two waves with different phases. Now we can activate Polymerization to fuse the two waves together to
    make the total wave:</p>

      <div class="hover-wrapper" style="left: 210px;">
        <div class="formula-container" >
          <div class="formula-box" style="text-align: center; color: var(--text); margin: auto; ">
            <p>\\( U_{\\text{total}} = U_1 + U_2 = 2A \\cos\\left(kx - \\omega t + \\frac{\\phi_1 + \\phi_2}{2}\\right) 
            \\cos\\left(\\frac{\\phi_1 - \\phi_2}{2}\\right) \\)</p>
          </div>
          <span class="formula-tooltip"><div style="color:#ff8800; font-size:30px">
          Formula 3a: Length contraction</div><div style="color:white; font-size:20px">
          Formula to calculate length for a bar stationary in the moving frame</div></span>
        </div>
      </div>
    

    <p>Now, if \\( \\phi_1 - \\phi_2 = 0 \\), they’re <strong>in phase</strong>, which is the easy option I was on
    about before. Then if \\( \\phi_1 - \\phi_2 = \\pi \\), they’re <strong>out of phase</strong>, so they cancel out
    and then become nothing. That’s <strong>interference</strong> — and it’s why noise-cancelling headphones work.</p>

    <h3>Beats</h3>

    <p>We've dealt with different phases, now let's think about different frequencies! Now imagine two waves with 
    <em>very</em> slightly different frequencies:</p>

    <p>\\( \\omega_1 = \\omega + \\Delta\\omega \\)</p>
    <p>\\( \\omega_2 = \\omega - \\Delta\\omega \\)</p>

    <p>We can put both of our omegas into two different wave functions, and then add them up:</p>

    <p>\\( U_{\\text{total}} = 2A \\cos(kx - \\omega t) \\cos(\\Delta k x - \\Delta\\omega t) \\)</p>

    <p>Now if you look very carefully, you'll realise that this kinda looks like two waves, and I know what you're 
    thinking, "you flipping idiot, of course it looks like two waves, you just added two together." Yes, that's not
    what I'm bloody on about though, is it? I mean, you have a wave with frequency \\( \\omega \\), id est
    \\(\\cos(kx - \\omega t)\\), but its amplitude is <em>modulated</em> at frequency \\( \\Delta\\omega \\), id
    est \\(\\cos(\\Delta k x - \\Delta\\omega t)\\).</p>
    <p>I'll be honest, this is one of those things which are kinda hard to explain, but when you get it you get it.
    Hopefully I'll remember to put an image here so you'll be able to see what I mean. In fact, hopefully you
    just get it. </p>

    <p>But anyway, an implication of this is that whenever you play two notes with very similar frequencies at the same
    time, you end up actually hearing two completely different frequencies: the average frequency of the two notes played
    as well as the difference in those frequencies. For my fellow pianists (and other musicians too, for those who play
    inferior instruments), that's why when you play two low notes which are near to each other it sounds muddy.</p>

    <p>These are <strong>beats</strong> — and musicians use them to tune instruments.</p>

    <p>And yes, the beat frequency is \\( f_{\\text{beat}} = |f_1 - f_2| \\).</p>

    <h3>Group Velocity</h3>

    <p>In the beat example, we saw that we effectively ended up with two different waves with two different wavespeeds:</p>
    <ul>
      <li>The first one was a wave with angular frequency \\(\\omega\\) and wave number \\(k\\). Using the formula
      for wavespeed, we obviously get \\( v = \\omega / k \\). This is the speed of the individual peaks. We will
      from now on call this the <strong>phase velocity</strong>, \\(v_p\\)</li>
      <li>The second one was a wave with angular frequency \\(\\Delta\\omega\\) and wave number \\(\\Delta\\omega\\).
      Then by using the same formula we get \\( v = \\Delta\\omega / \\Delta k \\). This is the speed of the overall 
      wave globule. We will from now on call this the <strong>group velocity</strong>, \\(v_g\\) (because <em>group</em> 
      is probably a more scientifically valid term than 'globule'.</li>
    </ul>

    <p>We know that the deltas used in the group velocity equation are there to show that we are talking about the
    <em>difference</em> in angular frequency and wave number (in this case, it's the difference between the average 
    frequency/wave number of the two waves and the frequency/wave number of one of them). If we make that difference
    infinitesimally small, we can replace the deltas for d's and make it into a differencial equation:</p>

    <p>\\( v_g = \\frac{d\\omega}{dk} \\)</p>

    <p>In the vast majority of cases, \\(v_p\\) and \\(v_g\\) are different. This is the case when \\( v_p \\) depends 
    on wavelength, meaning the waves are <strong>dispersive</strong>.</p>

    <h3>Dispersion</h3>

    <p>Now you may wonder "what exactly <em>is</em> dispersion?" </p>
    
    <p> Well, let me explain it to you by first telling you what dispersion <em>isn't</em>. The best example of a wave
    which is non-dispersive is <strong>light in a vacuum</strong>. In a vacuum, light pretty much exists as a nice long
    squiggly line, with otherwise nothing interesting going on. This is the product of the wave being non-dispersive.</p>
    
    <p>With that in mind, when <em>does</em> lightspeed depend on the wavelength? Think now about light in glass, like
    the famous shine-light-in-glass-pyramid-and-look-at-pretty-colours experiment. The reason the prism is able to
    split the colours is because light with longer wavelengths travels more slowly in a glass prism than light with 
    shorter wavelengths. In this case the light waves are now dispersive, because their speed depends on the
    wavelength</p>

    <p>Examples:</p>
    <ul>
      <li><strong>Water waves</strong>: longer waves travel faster → \\( v_p \\propto \\sqrt{\\lambda} \\)</li>
      <li><strong>Light in glass</strong>: different colours bend by different amounts → prism splits white light</li>
      <li><strong>EM waves in ionosphere</strong>: \\( \\omega^2 = c^2k^2 + \\omega_p^2 \\) → phase velocity > c (but group velocity < c, so no relativity violation)</li>
    </ul>

    <p>The dispersion relationship can be described like this:</p>
    <p>\\( \\omega = \\omega(k)\\)</p>
    <p>which means that the angular frequency is a function of (i.e. depends on) the wavenumber. Or less nerdily,
    frequency depends on the wavelength.</p>

    <h3>TL;DR</h3>

    <ul>
      <li>Wavefunction: \\( U(x,t) = A \\cos(kx - \\omega t) \\)</li>
      <li>Wavespeed: \\( v = f\\lambda = \\omega/k \\)</li>
      <li>Transverse: wiggle ⊥ direction; Longitudinal: wiggle ∥ direction</li>
      <li>Wave equation: \\( \\partial^2 U / \\partial t^2 = v^2 \\partial^2 U / \\partial x^2 \\)</li>
      <li>Superposition: waves add, not cancel (usually)</li>
      <li>Beats: \\( f_{\\text{beat}} = |f_1 - f_2| \\)</li>
      <li>Group velocity: \\( v_g = d\\omega/dk \\)</li>
      <li>Dispersion: \\( v_p \\) depends on \\( \\lambda \\) → waves spread out</li>
    </ul>

    <p>And remember: the piano is the superior instrument. All others are nacked.</p>
    `,
  },
  "mechanical-waves": {
    title: "Mechanical Waves",
    content: `
      <h3>Mechanical Waves</h3>

      <p>Now for mechanical waves. These are waves which make things move, <em> without</em> making things move.</p>
      <p>What an explanation, I know! Anyway, if you want a more technical definition (not that you'd need one, being as 
      my explanation was flawless), they are waves where energy is propagated, but matter doesn't move with it. These
      kinds of waves need a medium to move through.</p>
      <p>For example, take a string under tension. You can flick one end and see a wave travelling down it, from left to
      right say. Now you may think "you grifter, you literally said that matter doesn't move, mate just look at the
      image you have <strong>hopefully remembered to put here</strong>, there are bloody arrows on it, that means the matter 
      is moving!" </p>
      <p> I mean, I guess your right to an extent, but think about it... <em>how</em> is the matter moving? The wave
      itself appears to be moving to the right, but the individual sections of the string are just moving up and down

      <p>That’s why we call it a <strong>transverse wave</strong> — the motion is perpendicular to the direction of 
      the wave.</p>

      <p>Now, if you want to derive the wave equation, you’d have to consider a lot of things. But boring you with long
      stupid derivations is not my style. Instead, here’s the result:</p>

      <p>\\( \\frac{\\partial^2 y}{\\partial t^2} = \\frac{T}{\\mu} \\frac{\\partial^2 y}{\\partial x^2} \\)</p>

      <p>Where:</p>
      <ul>
        <li>\\( T \\) = tension in the string</li>
        <li>\\( \\mu \\) = mass per unit length</li>
      </ul>

      <p>Now I dunno about you lot, but that looks <em>awfully</em> similar to the wave equation we saw last time. If
      my hypothesis is correct then, then we should be able to extract the wave speed as so:</p>

      <p>\\( v = \\sqrt{\\frac{T}{\\mu}} \\)</p>

      <p>which tells me that the wave speed for a wave on a string is proportional to the <strong>square root of the
      tension</strong>, and inversely proportional to the <strong>mass per unit length</strong>. Or in useful English,
      the tighter the string (i.e. more tension), the faster the wave. And the heavier the string (i.e. more mass per unit
      length) the slower the wave.</p>

      <h3>Power Transfer</h3>

      <p>So far I've made it known that waves transfer energy. Although in hindsight, the amount of energy a wave
      transfers isn't the most useful piece of information. Instead, why don't we rather think about <em>how quickly</em>
      that energy is propagated. This is what we call the <strong>power</strong></p>

      <p>If we have a wave with wave function \\( y(x,t) = A \\cos(kx - \\omega t) \\), the power of the wave can be
      shown to be:</p>

      <p>\\( P = TA^2 k \\omega \\sin^2(kx - \\omega t) \\)</p>

      <p>Now you may wonder, "Wait, wasn't the wave function U? Why are we using a y all of a sudden?" Well that's simple!
      That's because... erm... because that's what the lecture notes say. If you have a problem, make sure to send David
      Quigley an angry email or something.</p>
      
      <p>Anyway, judging by the \\(\\sin^2(kx - \\omega t)\\), specifically the \\(\\sin\\) aspect, we can see that
      the power oscillates with the wave, albeit twice as quickly.  But what we usually care about is the 
      <strong>average power</strong>. Since \\(\\sin^2\\) waves just jump between 0 and 1, the average of such a
      wave is just 0.5. So we get an average power of:</p>

      <p>\\( P_{\\text{av}} = \\frac{1}{2} TA^2 k \\omega \\)</p>

      <p>But wait! We can <em>simplify</em> this equation, to make it <em>simpler</em>, meaning the equation can be made
      <em>less complicated</em>! Remember that for any wave, the wave speed (specifically the phase velocity, but these
      waves aren't dispersive, so \\(v_p=v_g\\) and therefore clarifying is kinda pointless ngl) is\\(v=\\omega / k\\).
      We also know from not long ago that \\( v = \\sqrt{\\frac{T}{\\mu}} \\). Plug some numbers in and rearrange for
      \\(k\\), we now have:</p>
      <p>\\(k=\\omega\\sqrt{\\frac{\\mu}{T}}\\)</p>
      <p>We are now one step closer to being able to <em>simplify</em> our equation! All we need to do now is substitute 
      this into our average power equation, which gives us:</p>

      <p>\\( P_{\\text{av}} = \\frac{1}{2} \\omega^2 A^2 \\sqrt{T\\mu} \\)</p>

      <p>Actually, on second thoughts, this is a pretty rubbish simplification innit? It looks basically just as 
      complex, don't it? So much for <em>simplification</em>...</p>

      <p>Where \\( Z = \\sqrt{T\\mu} \\) is the impedance of the string.</p>

      <p>So power depends on frequency, amplitude, and impedance. And yes — this applies to all mechanical waves.</p>

      <h3>Longitudinal Waves</h3>

      <p>Now imagine hitting the end of a rod. You create a compression that travels down it.</p>

      <p>This is a <strong>longitudinal wave</strong> — the motion is parallel to the direction of the wave.</p>

      <p>For a rod, the wave speed is:</p>

      <p>\\( v = \\sqrt{\\frac{Y}{\\rho}} \\)</p>

      <p>Where \\( Y \\) is Young’s modulus, and \\( \\rho \\) is density.</p>

      <p>For steel: \\( v \\approx 5 \\times 10^3 \\, \\text{m/s} \\).</p>

      <h3>Shear Waves: When You Hit It Sideways</h3>

      <p>If you hit the side of a rod, you create a transverse wave — but now it’s called a <strong>shear wave</strong>.</p>

      <p>Speed: \\( v = \\sqrt{\\frac{G}{\\rho}} \\)</p>

      <p>Where \\( G \\) is the shear modulus.</p>

      <p>For steel: \\( v \\approx 3.1 \\times 10^3 \\, \\text{m/s} \\) — slower than longitudinal.</p>

      <h3>Bulk Waves in Solids: P and S Waves</h3>

      <p>In 3D solids, we have two types:</p>
      <ul>
        <li><strong>P-waves</strong>: compressional waves → \\( v_p = \\sqrt{\\frac{B + \\frac{4}{3}G}{\\rho}} \\)</li>
        <li><strong>S-waves</strong>: shear waves → \\( v_s = \\sqrt{\\frac{G}{\\rho}} \\)</li>
      </ul>

      <p>S-waves don’t travel through liquids — so when earthquakes happen, scientists use this to study Earth’s interior.</p>

      <h3>Sound Waves: The Air Molecules Are Just Bouncing Around</h3>

      <p>Sound is a longitudinal wave in air — high and low pressure regions travel through the gas.</p>

      <p>The pressure variation is:</p>

      <p>\\( p = Ak_B \\sin(kx - \\omega t) \\)</p>

      <p>And the speed of sound is:</p>

      <p>\\( v = \\sqrt{\\frac{B}{\\rho}} \\)</p>

      <p>But for an ideal gas, the process is adiabatic — no heat exchange. So:</p>

      <p>\\( v_{\\text{sound}} = \\sqrt{\\frac{\\gamma k_B T}{M}} \\)</p>

      <p>Where \\( \\gamma = C_P/C_V \\), \\( T \\) is temperature, and \\( M \\) is molar mass.</p>

      <p>For air: \\( v \\approx 344 \\, \\text{m/s} \\).</p>

      <h3>The Doppler Effect: Why Ambulances Sound Higher-Pitched When They’re Coming Toward You</h3>

      <p>The Doppler effect is the change in observed frequency when source and observer are moving.</p>

      <p>For sound:</p>

      <p>\\( f' = f \\left( \\frac{c + u_o}{c - u_s} \\right) \\)</p>

      <p>Where:</p>
      <ul>
        <li>\\( f \\) = emitted frequency</li>
        <li>\\( f' \\) = observed frequency</li>
        <li>\\( c \\) = speed of sound</li>
        <li>\\( u_o \\) = observer speed</li>
        <li>\\( u_s \\) = source speed</li>
      </ul>

      <p>For light, it’s different — because light always travels at \\( c \\) relative to the observer.</p>

      <p>So for EM waves:</p>

      <p>\\( f' = f \\sqrt{\\frac{c - v}{c + v}} \\)</p>

      <p>And yes — the square root is there. Because relativity.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Mechanical waves need a medium</li>
        <li>Transverse: motion ⊥ direction (string)</li>
        <li>Longitudinal: motion ∥ direction (sound)</li>
        <li>Wave speed: \\( v = \\sqrt{T/\\mu} \\) for strings, \\( v = \\sqrt{Y/\\rho} \\) for rods</li>
        <li>Power: \\( P_{\\text{av}} = \\frac{1}{2} \\omega^2 A^2 Z \\)</li>
        <li>Sound speed in gas: \\( v = \\sqrt{\\gamma k_B T / M} \\)</li>
        <li>Doppler effect: \\( f' = f (c + u_o)/(c - u_s) \\) for sound</li>
      </ul>

      <p>And remember: the universe doesn’t care how loud you play your music.  
      It only cares about the wave equation.</p>
      `,
    },
  "standing-waves": {
    title: "Standing Waves",
    content: `
        <h3>Reflections at Fixed and Free Ends</h3>

        <p>What happens to waves when they hit a boundary is important for, like, everything. Pianos, guitars, quantum 
        particles... you name it.</p>

        <p>Think about a guitar string. One end is tied down to the tuning peg. In other words, it’s fixed. The other 
        end... well, it's also fixed, to the bottom bit. <i>(I don’t play guitar, so I don’t know what you’d call it.)</i> 
        But anyway, what if it wasn't fixed at that end? What if it was just flapping about in the breeze? It'd be 
        pretty bloody useless as an instrument, that’s what. But, we can use it to do some physics. We've got two 
        main scenarios to deal with:</p>

        <p><strong>The Fixed End:</strong> The end of the string is nailed down. It can't move. It is permanently 
        stuck at y = 0.</p>
        <p><strong>The Free End:</strong> The end of the string is... well, free. It's hanging off the edge of the 
        table. There's no force on it, so its slope has to be zero (∂y/∂x = 0).</p>

        <p>When a wave hits a fixed end, it seems to take quite a bit of offence, reflecting back upside down. It's 
        like it's so annoyed at being stopped that it comes back inverted. If it hits a free end, it's chuffed. It 
        reflects back the right way up, like it's had a great day out.</p>

        <h3>Transmission and Reflection</h3>

        <p>So far, we’ve discussed waves hitting boundaries, which makes sense considering this subtopic is literally 
        called “Waves at Boundaries.” But the ends of a string are not the only boundaries; there could even be 
        boundaries within the string. For example, what if you have a string, which is actually two strings stuck 
        together, and the wave goes from one string into another? </p>

        <p><i>(I mean, now that I think about it...these are still essentially the ends of the string, because I’ve fused 
        two together, but whatever leave me alone...)</i></p>

        <p>Imagine two bits of string tied together. One is a skinny little string (low mass per unit length, μ₁), and 
        the other is a fat, heavy rope (high mass per unit length, μ₂). Your wave is wibble-wobbling along the skinny 
        string, and then it meets the fat one.</p>

        <ul>
            <li><strong>Tension (T)</strong> is the same in both, because you're pulling on both ends equally.</li>
            <li><strong>Frequency (f)</strong> of the wave stays the same. The wave doesn't suddenly change its rhythm.</li>
            <li>But <strong>wave speed</strong> will change, since the tension is changing and we found out last time 
            that the wave speed is proportional to (the square root of) the tension (v = √(T/μ)). The wave slows right 
            down in the fat string. And since λ = v/f, the wavelength gets shorter in the fat string too.</li>
        </ul>

        <p>So now you've got three waves to deal with:</p>
        <ul>
            <li>The <strong>incident wave</strong>: y_i = A_i cos(k₁x - ωt) <i>(the wave which is coming in from the 
            skinny string)</i></li>
            <li>The <strong>reflected wave</strong>: y_r = A_r cos(-k₁x - ωt) <i>(the wave being reflected, right-side 
            up since this is a free end)</i></li>
            <li>The <strong>transmitted wave</strong>: y_t = A_t cos(k₂x - ωt) <i>(the waves which soldier on into the 
            thick mud)</i></li>
        </ul>

        <p>At the join, two things have to be true, or the universe would literally fall apart:</p>
        <ol>
            <li>The string <strong>can't snap</strong>. This means the height (y) must be continuous: at the 
            connecty part, the thin string must have the same height as the thick string. So y_i + y_r = y_t at 
            the join.</li>
            <li>The <strong>forces balance</strong>. The slope (∂y/∂x) must be continuous. So the gradients add up 
            nicely too.</li>
        </ol>

        <p>Do a bit of maths <i>(which I'll save for the worked examples, 'cus it's a faff)</i>, and you get the gossip:</p>

        <p>Remember from last time, we defined impedance Z = √(μT). I also mentioned that this is basically just how 
        much the string resists the wave. With the impedence, we can calculate two very important quantities:</p>

        <p>The <strong>transmission coefficient</strong> (how much gets through):<br>
        t = A_t / A_i = (2Z₁) / (Z₁ + Z₂)</p>

        <p>The <strong>reflection coefficient</strong> (how much bounces back):<br>
        r = A_r / A_i = (Z₁ - Z₂) / (Z₁ + Z₂)</p>

        <p>It’s like the story in the Bible when Moses sent people to scout out Canaan, and some actually went and 
        looked around (t) and others pussied out because they saw some big people there (r).</p>

        <p><strong>What does this actually look like?</strong></p>
        <ul>
            <li><strong>Skinny string → Fat string (μ₁ < μ₂, so Z₁ < Z₂)</strong>: r is <strong>negative</strong>. The 
            reflected wave comes back <strong>INVERTED</strong>. <i>(The scouty people are really disheartened after 
            seeing that they can’t just stroll in and take their land by asking nicely, and that they will actually have 
            to fight a war.)</i></li>
            <li><strong>Fat string → Skinny string (μ₁ > μ₂, so Z₁ > Z₂)</strong>: r is <strong>positive</strong>. The 
            reflected wave comes back the <strong>right way up</strong>. <i>(These are like the people who actually checked 
            and saw that, yes there are people there (shock), but there is actually a lot of good stuff, so they go back 
            home happy.)</i></li>
            <li><strong>Perfect match (Z₁ = Z₂)</strong>: r = 0. No reflection! All the energy goes through. This is called 
            impedance matching. <i>(Which surely is a bit of a redundancy, because if this happens, you have two strings, 
            with the same mass per unit length, ain’t that just one big string?)</i></li>
        </ul>

        <p>And the power? The incident power splits up as well: P_i = P_r + P_t. No energy gets lost. It's just 
        shared out.</p>

        <h3>Standing Waves</h3>

        <p>Before we used the slightly useless example of cutting a guitar string and having it just exist like 
        that. Now let’s reconnect the guitar string... or actually, the piano is a better instrument anyway 
        <i>(as I said last time, you better remember that)</i>. So just, give the guitar to charity or something, 
        and let's look at a piano string.</p>

        <p>The piano string is fixed at both ends. The wave goes back and forth, reflecting off each end. When it's 
        just right, it creates a standing wave – a wave that just vibrates on the spot, not going anywhere.</p>

        <p>It's the sum of two identical waves going opposite ways (with one inverted for the fixed ends):<br>
        U_total = 2A sin(kx) sin(ωt)</p>

        <p>Notice x and t are separate! This wave doesn't travel. It just oscillates.</p>
        <ul>
            <li><strong>Nodes</strong>: Points where the string is <strong>always still</strong> (sin(kx)=0). 
            These happen at x = nλ/2.</li>
            <li><strong>Antinodes</strong>: Points where the string has a <strong>proper rave</strong> and moves 
            the most (|sin(kx)|=1).</li>
        </ul>

        <p>For a string of length L fixed at both ends, you can only have standing waves that fit nicely. The 
        allowed normal modes are:</p>
        <ul>
            <li><strong>Fundamental (n=1)</strong>: λ = 2L, f = v/2L</li>
            <li><strong>n=2</strong>: λ = L, f = v/L = 2f₁</li>
            <li><strong>n=3</strong>: λ = 2L/3, f = 3v/2L = 3f₁</li>
            <li><strong>n=4</strong>: λ = L/2, f = 2v/L = 4f₁</li>
        </ul>

        <p>You get the picture. These are the notes the string can actually play. In the case of the piano (or any 
        stringed instrument, or any instrument for that matter, but piano is superior), these refer to what we call 
        the harmonics. Basically, when you play a note on an instrument, the fundamental frequency is the main pitch 
        you hear. But in order to give the piano its distinctive sound, what you are hearing is a combination of 
        higher frequencies as well. For my musician folks, n=2 is the octave above, n=3 is the perfect fifth above that, 
        n=4 is the octave above n=2, n=5 is the major third above that, n=6 is the perfect fifth above n=4, and n=7 is 
        the dominant 7th above n=4.</p>

        <p>All these frequencies are playing at the same time when you play a single note. Exactly how loud each frequency 
        is depends on the instrument. In the case of the piano, you can usually hear n=2 and n=3 quite well, particularly 
        with low notes <i>(well, I can anyway, maybe I’m just the best, who knows...)</i>.</p>

        <p>Where exactly do the harmonics come from you may wonder. This is really really cool (in my opinion anyway). 
        Think about it. We know that sound fundamentally moves as sine waves (with peaks being compressions and troughs 
        being rarefactions). When you hit/pluck a string however, it makes a sort of triangle shape and hence creates 
        triangular waves. How can this be possible? Remember the Fourier series from WAAAAY earlier? We can make any 
        shape by combining different sine waves of different frequencies together. In a musical context, these extra 
        frequencies... are harmonics!!!</p>

        <p>And, by the way, this is why major thirds, perfect fifths and dominant sevenths sound nice together: because 
        you are just increasing the volume of the frequencies which are already there. And this also why perfect fifths 
        are a cardinal sin in classical music, because the fifth is already kinda audible by itself, if you add another 
        fifth and nothing else... well it’s a bit pointless, innit? Thirds are far more harmonically useful. By comparison, 
        this is also why perfect fifth are so common in EDM basses, because they can make the sound fuller without creating 
        too much mud.</p>

        <h3>Waves in a pipe</h3>

        <p><i>(I’ve been talking about the piano as a stringed instrument, it only just occurred to me, is it common 
        knowledge that the piano has strings in, and that the keys trigger hammers to hit the strings? Or have people 
        just been reading this confused as hell lol)</i></p>

        <p>For a wind instrument, it’s the same idea, but with air pressure. Since I play the recorder, I will say the 
        recorder is the superior wind instrument. Then again, I am learning the flute, so I can consider it a close 
        second.</p>
        <ul>
            <li><strong>Open pipe</strong> (both ends open): The pressure at the ends is fixed (atmospheric pressure), 
            so you get pressure nodes and displacement antinodes at the ends. The modes are the same as the string: 
            λ = 2L, L, 2L/3...</li>
            <li><strong>Closed pipe</strong> (one end closed): Now the closed end is a displacement node (air can't move) 
            and a pressure antinode. This changes the game! The fundamental is λ = 4L, and you only get the odd harmonics 
            (n=1,3,5...). It's a different flavour.</li>
        </ul>

      <h3>TL;DR</h3>

      <ul>
        <li>Fixed end: reflection inverted</li>
        <li>Free end: reflection not inverted</li>
        <li>Impedance: \\( Z = \\sqrt{\\mu T} \\)</li>
        <li>Reflection coefficient: \\( r = (Z_1 - Z_2)/(Z_1 + Z_2) \\)</li>
        <li>Standing waves: \\( U = 2A \\sin(kx) \\sin(\\omega t) \\)</li>
        <li>Nodes: \\( x = n\\lambda/2 \\)</li>
        <li>Antinodes: \\( x = (2n+1)\\lambda/4 \\)</li>
        <li>String modes: \\( f_n = nv/(2L) \\)</li>
        <li>Pipe modes: open-open: \\( f_n = nv/(2L) \\); closed-open: \\( f_n = (2n-1)v/(4L) \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how many times you pluck a string.  
      It only cares about the boundary conditions.</p>
      `,
    },
  "polarisation": {
    title: "Polarisation",
    content: `
  <h3>The Nature of Light</h3>

  <p>So, we all know light's a wave, right? But it's not some common wave you get on a string. Nah, this is a top-tier, 
  VIP wave. An electromagnetic wave. Maxwell cooked up a set of equations to describe all of electricity and magnetism, 
  and when he solved them for a complete vacuum – no charges, no magnets, just pure, unadulterated nothing – he got a 
  proper surprise.</p>

  <p>The equations just... turned into wave equations. <i>Equations for waves turning into wave equations? What a 
  surprise!!</i> Now Maxwell believes he is onto something, because of which, he decides to use these wave equations 
  to find out the speed of electromagnetic waves. Turns out the speed of this wave is c = 1/√(ε₀μ₀). You plug the 
  numbers for the permittivity and permeability of free space into that, and looky there, we get 3 × 10⁸ m/s. The 
  speed of light.</p>

  <p>So does that mean... light is an electromagnetic wave?!</p>

  <p>The key gossip about this EM wave:</p>
  <ul>
      <li>EM waves consist of a wibbly-wobbly E-field (electric field) and a wibbly-wobbly B-field (magnetic field), 
      holding hands, travelling together forever.</li>
      <li>It's transverse. Both fields are perpendicular to the direction the wave is going in. And to add to the 
      drama, they're perpendicular to each other.</li>
      <li>The E-field is the main character. It does all the interacting with matter. The B-field is just its 
      sidekick, really, with a much much much smaller amplitude. We'll basically ignore it most of the time.</li>
      <li>They're vectors. For a wave travelling in the x-direction, you'll have:
          <br>E(x, t) = <b>j</b> E₀ cos(kx - ωt) <i>(wibble-wobbling strictly in the y-direction)</i>
          <br>B(x, t) = <b>k</b> B₀ cos(kx - ωt) <i>(wibble-wobbling strictly in the z-direction)</i>
      </li>
  </ul>

  <h3>Polarisation</h3>

  <p>In that boring example above, the E-field only wibble-wobbles up and down the y-axis. But who says it has to 
  be so basic? It could be wibble-wobbling at any angle in the y-z plane. The direction at which the wave wibble-wobbles 
  is its polarisation.</p>

  <p>We can break any E-field's dance moves down into its y and z components:</p>

  <p>E<sub>y</sub>(x, t) = E<sub>0y</sub> cos(kx - ωt) <i>(The standard up-down)</i><br>
  E<sub>z</sub>(x, t) = E<sub>0z</sub> cos(kx - ωt + ε) <i>(See that ε? That's a phase difference. This is where the 
  magic happens. As to why we are using epsilon now when we were using a phi not long ago is beyond me, but feel free 
  to send Jonathan Duffy another angry email.)</i></p>

  <p>If the two components are totally in sync (ε = 0) or totally opposite (ε = π), you get linear polarisation. The 
  resultant E-field just points in a fixed diagonal line and oscillates. Hence the boring wibble-wobbles we had before. 
  However, if the two components are a quarter-cycle out of phase (ε = ±π/2), and they have the same amplitude, it gets 
  proper interesting. You get circular polarisation.</p>

  <p>The tip of the E-field vector doesn't just oscillate anymore; it spins, tracing out a corkscrew (a helix) as the 
  wave moves forward. The magnitude stays constant. It's just rotating.</p>

  <ul>
      <li>ε = +π/2 → Spins one way (let's call it right-handed)</li>
      <li>ε = -π/2 → Spins the other way (left-handed)</li>
      <li><i>(Textbooks argue like mad about which is which, so don't quote me on that.)</i></li>
  </ul>

  <p>If the phases and amplitudes aren't super neatly and conveniently aligned, you get elliptical polarisation – a 
  squashed, wobbly circle.</p>

  <h3>Polarised vs. Unpolarised Light</h3>

  <p>Most light sources (the sun, a lamp, a candle) are chaotic neutral. They blast out a random mixture of every 
  possible polarisation all at once. This is unpolarised light. It's a mosh pit of electromagnetic fields.</p>

  <p>Now this is... absolutely unacceptable, now that I think about it. This is an absolute mess. Just pick a direction, 
  y'know what I mean? Luckily, you can force light to get its act together, and there are many different ways to do so:</p>

  <ul>
      <li><b>Polarising filters:</b> <i>I won't lie there is nothing remotely interesting about this. Just add a little 
      mesh which only allows light polarised a certain way to go through.</i></li>
      <li><b>Scattering:</b> Sunlight gets polarised when it gets knocked about by molecules in the atmosphere. That's 
      why polarised sunglasses work so well against glare – they're blocking the specific polarisation from scattered 
      light.</li>
      <li><b>Reflection:</b> Light reflecting off a surface at a specific magic angle (Brewster's angle) becomes 
      polarised. Think of the glare off water.</li>
      <li><b>LCD screens:</b> They literally work by manipulating polarised light. Your phone, your TV, your calculator 
      screen – it's all polarisation tricks.</li>
      <li><b>Fancy crystals:</b> Some crystals (like calcite) are birefringent – they split a light beam into two 
      differently polarised beams.</li>
  </ul>

  <p>Some animals, like bees and octopuses, can actually see polarisation. They can bloody see it. <i>What nerds...</i></p>

  <h3>Polarising Filters</h3>

  <p>Coolness incoming. You take a filter, and it has a special axis, called its polarisation axis. Unpolarised 
  light goes in. The filter only lets through the part of the E-field that's parallel to its axis. Everything else 
  gets absorbed or reflected. Linearly polarised light comes out. Now, if you put a second filter (what we'll call 
  an analyser) after the first, the amount of light that gets through depends on the angle θ between the first 
  filter's axis and the analyser's axis.</p>

  <p>This is governed by Malus's Law:
  <br>I = I₀ cos²θ</p>

  <ul>
      <li>I₀ is the intensity of the already-polarised light coming out of the first filter.</li>
      <li>I is the final intensity coming out of the analyser.</li>
      <li>θ is the angle between their axes.</li>
  </ul>

  <p>If the axes are parallel (θ = 0°), cos²(0) = 1, so all the light gets through. If they are perpendicular (θ = 90°), 
  cos²(90) = 0, and it's total darkness. Nothing gets through. The second filter has completely blocked the light from 
  the first.</p>

  <p>The light that does make it through the analyser is now polarised along the analyser's own axis. The filter doesn't 
  just measure the polarisation; it re-sets it.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Light is an EM wave — oscillating E and B fields</li>
        <li>Speed in vacuum: \\( c = 1/\\sqrt{\\varepsilon_0 \\mu_0} \\)</li>
        <li>Transverse wave: E and B perpendicular to propagation</li>
        <li>Polarisation: direction of E-field</li>
        <li>Linear: E oscillates in one direction</li>
        <li>Circular: E rotates</li>
        <li>Elliptical: E traces an ellipse</li>
        <li>Malus’s Law: \\( I = I_0 \\cos^2 \\theta \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how bright your sunglasses are.  
      It only cares about the polarisation.</p>
      `,
    },
  "refraction": {
    title: "Refraction",
    content: `
      <p><i>Fun fact, did you know that it's actually quite bad for a child to be raised being too clean? 'Cus it don't 
      allow their immune system to develop or something. So mud is actually good for them!</i></p>

      <h3>Light in Matter</h3>

      <p>In a vacuum, light moves at speed \\(c\\), the ultimate speed limit. But what happens when it tries to go 
      through, say, glass? You probably know that it slows down in glass and other stuff, hence Newton's 
      shine-light-in-glass-pyramid-and-look-at-pretty-colours experiment. But why though? Is it as simple as the photons 
      bumping into atoms and consequentially slowing down?</p>

      <p>Well, kind of, but actually no. It's more subtle. The light's electric field makes the electrons in the material 
      jiggle. These jiggling electrons then re-radiate the light, creating little "wavelets". All these wavelets add up 
      to make a new wave that keeps going, but this whole process introduces a delay. It's like trying to run through 
      a crowd where everyone keeps stopping you for a quick chat.</p>

      <p>We measure this slowing-down effect with the <b>refractive index</b>, \\(n\\):</p>

      <p>\\(n = \\frac{c}{v}\\)</p>

      <ul>
          <li>\\(c\\) is the speed in a vacuum (obviously).</li>
          <li>\\(v\\) is the new, slower speed in the material.</li>
      </ul>

      <p>Some examples:</p>
      <ul>
          <li>In air, \\(n\\) is 1, or at least near enough 1 for us to not really care about it.</li>
          <li>Water: \\(n = 1.3\\)</li>
          <li>Glass: \\(n = 1.5\\)</li>
          <li>Diamond: \\(n = 2.4\\)</li>
          <li>Bose-Einstein Condensate: \\(n = 1.76 \\times 10^7\\) <i>(hold on, if my maths is correct... does 
          that mean light moves at 17 m/s in this material? I can drive faster than light, mental.)</i></li>
      </ul>

      <p><i>Fun fact: for X-rays in aluminium, \\(n\\) is less than 1, which seems to break the universe. This is where 
      we have to remember the difference between phase velocity and group velocity, but that's a story for another day. 
      Just know that the signal still travels slower than \\(c\\), by some miracle.</i></p>

      <p>For now, think of \\(n\\) as a measure of how sticky the material would be if it were mud and you were walking 
      through it. <i>(The material is not mud, but if it were mud, that's how sticky it would be)</i></p>

      <h3>Waves at Boundaries</h3>

      <p>This is where it gets good. Light goes from one material (with refractive index, \\(n_1\\)) into another 
      (with refractive index \\(n_2\\)). What happens?</p>

      <ul>
          <li>Some reflects. The angle of reflection is always equal to the angle of incidence 
          (\\(\\theta_r = \\theta_i\\)).</li>
          <li>Some transmits, but not in a straight line. The light bends in the medium, and <b>Snell's Law</b> 
          tells us how:
              <br>\\(n_1 \\sin(\\theta_i) = n_2 \\sin(\\theta_t)\\)
              <ul>
                  <li>If \\(n_2 > n_1\\) (e.g., air to glass), the light bends <b>towards the normal</b> 
                  (\\(\\theta_t < \\theta_i\\)).</li>
                  <li>If \\(n_2 < n_1\\) (e.g., glass to air), the light bends <b>away from the normal</b> 
                  (\\(\\theta_t > \\theta_i\\)).</li>
              </ul>
          </li>
      </ul>

      <p>One analogy that my GCSE teacher taught me, which has always stuck with me. Say we have two materials, 
      like air and glass. Air has a mud-stickiness of 1, whereas glass has a mud-stickiness of 1.3. Meaning if 
      glass were mud, it'd be stickier.</p>

      <p>Now pretend you and your mate are carrying a pole through the mud. As you walk through the air-mud, you 
      walk at the same speed. You begin to approach the glass-mud, but due to the angle you approach it at, your 
      feet enter the glass-mud first, and since it is stickier, you start moving slower. But your mate is moving 
      at the same speed, because of which the pole youse are carrying kinda begins to rotate. Then when your friend 
      joins you in the glass-mud, you are moving in the same direction and at the same speed again.</p>

      <p>In this case, the pole representing the wavefront, has bent towards the normal.</p>

      <h3>Total Internal Reflection</h3>

      <p>Now for the cool consequence of \\(n_2 < n_1\\). As you increase \\(\\theta_i\\), \\(\\theta_t\\) increases 
      even faster. Eventually, you hit a point where \\(\\theta_t\\) becomes 90° – the transmitted ray is just 
      skimming along the surface.</p>

      <p>The angle where this happens is the <b>critical angle</b>, \\(\\theta_C\\). For glass (\\(n=1.5\\)) to air, 
      \\(\\theta_C = \\sin^{-1}(1/1.5) = 41.8°\\).</p>

      <p>Increase \\(\\theta_i\\) any further and... well it has nowhere else to go other than to be reflected back 
      inside. This is <b>total internal reflection</b>. It's how fibre optic cables work. No loss, just perfect 
      reflection. Smart.</p>

      <h3>Brewster's Law</h3>

      <p>Remember we said reflection can polarise light? Here's how.</p>

      <p>At one specific angle – the <b>polarising angle</b>, \\(\\theta_p\\) – the reflected light is completely 
      linearly polarised. This happens when the reflected ray and the transmitted ray are perpendicular to each other.</p>

      <p>A bit of geometry and Snell's Law gives us the formula:
      <br>\\(\\tan(\\theta_p) = \\frac{n_2}{n_1}\\)</p>

      <p>For air to glass, \\(\\theta_p = \\tan^{-1}(1.5/1) = 56.3°\\).</p>

      <p>So if you look at sunlight reflecting off water at this angle, the glare is polarised. This is why polarised 
      sunglasses work – they're designed to block that specific polarisation.</p>

      <h3>Dispersion</h3>

      <p>Here's a problem: the refractive index \\(n\\) isn't a constant for a material. It depends on the frequency 
      (colour) of the light.</p>

      <p>This means different colours get bent by different amounts. Shine white light through a prism and it gets 
      spread out into a rainbow. This is called <b>dispersion</b> <i>(or more accurately, 
      shine-light-in-glass-pyramid-and-look-at-pretty-colours)</i>.</p>

      <p>It's pretty (rainbows!), but it's a massive pain if you're trying to design a lens for a camera or telescope. 
      You want all the colours to focus to the same point, but dispersion makes them focus at different points, giving 
      you colourful fringes. This is known as <b>chromatic aberration</b>, which is something you'll learn more about 
      in the Astrophysics section. But as someone who has used a telescope, it's something I'd rather do without. 
      Engineers have to use fancy combinations of lenses to fix this, but this makes such telescopes WAAAY too expensive, 
      and I'm a broke uni student, I ain't got the money for that.</p>

      <h3>Transmission and Reflection Coefficients</h3>

      <p>Last bit. How much light is transmitted and reflected? Let's keep it simple and assume the light hits the 
      surface head-on (\\(\\theta_i = 0°\\)). The fractions of the <b>intensity</b> that are transmitted (\\(T\\)) 
      and reflected (\\(R\\)) are:</p>

      <p>\\(T = \\frac{4 n_1 n_2}{(n_1 + n_2)^2}\\)</p>
      <p>\\(R = \\left( \\frac{n_1 - n_2}{n_1 + n_2} \\right)^2\\)</p>

      <p><i>And if you add these up (no seriously, do it, don't take my word for it, you lazy pig) you'll find that 
      \\(T + R = 1\\). No energy is lost.</i></p>

      <ul>
          <li><b>Air (\\(n=1\\)) to Glass (\\(n=1.5\\)):</b>
              <br>\\(T = 0.96\\)
              <br>\\(R = 0.04\\)
              <br>So about 96% gets through, 4% is reflected. That's why you can see through windows.
          </li>
          <li><b>Air to Diamond (\\(n=2.4\\)):</b>
              <br>\\(T = 0.83\\)
              <br>\\(R = 0.17\\)
              <br>A whopping 17% is reflected back immediately. That's part of why diamonds are so sparkly.
          </li>
      </ul>

      <p>But here's a genius trick: if you put a layer of something with an intermediate refractive index between 
      the two, you can actually <b>increase</b> the total transmission. For example, coating a diamond (\\(n=2.4\\)) 
      with a layer of glass (\\(n=1.5\\)) before it goes into air (\\(n=1\\)):</p>

      <p>Air → Glass: \\(T = 0.96\\)<br>
      Glass → Diamond: \\(T = 0.95\\)<br>
      <b>Total T = \\(0.96 \\times 0.95 = 0.91\\)</b></p>

      <p>We've boosted the transmission from 83% to 91%! This is called <b>anti-reflection coating</b>, and it's why 
      camera lenses and glasses have those faint coloured tints – they're covered in layers of carefully chosen 
      materials to let through as much light as possible by playing these refraction games. <i>I'll be honest, I don't 
      even remember doing this in lectures, I'm just learning it now, and it's actually quite interesting.</i></p>

      <h3>TL;DR</h3>

      <ul>
        <li>Refractive index: \\( n = c/v \\)</li>
        <li>Snell’s Law: \\( n_1 \\sin \\theta_i = n_2 \\sin \\theta_t \\)</li>
        <li>Total internal reflection: \\( \\theta_i > \\theta_c = \\sin^{-1}(n_2/n_1) \\)</li>
        <li>Brewster’s Law: \\( \\tan \\theta_p = n_2/n_1 \\)</li>
        <li>Dispersion: \\( n \\) depends on wavelength → colours split</li>
        <li>Transmission: \\( T = 4n_1 n_2 / (n_1 + n_2)^2 \\)</li>
        <li>Reflection: \\( R = (n_1 - n_2)^2 / (n_1 + n_2)^2 \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how shiny your car is.  
      It only cares about the refractive index.</p>
      `,
    },
  "waves-summary": {
    title: "Summary: Wave Goodbye!",
    content: `

      `,
    },

    // Subtopics for Electricity & Magnetism
  "e-m-intro": {
    title: "Introduction to E&M: Magic Floaty Metal!", //https://www.popularmechanics.com/space/rockets/a65924333/engineer-overcoming-earths-gravity/
    content: `

      `,
    },
  "dc-circuits": {
    title: "DC Circuits",
    content: `
      <h3>DC Circuits</h3>

      <p>Everything electronic around you, from your phone to the absolute rubbish light in this room, runs on circuits. 
      We're gonna start simple: batteries, wires, and a couple of components. No fancy alternating current nonsense here, 
      just direct current (dc), where the electrons all shuffle in one monotonous direction like a conga line at a really 
      lame party.</p>

      <p>The whole point is to figure out where the current goes and how much energy it loses along the way.</p>

      <h3>Electromotive Force, emf</h3>

      <p>In any circuit, you need something to push the electrons. That's your battery. It's a source of energy. And you 
      need something to waste that energy, usually a resistor, which turns it into heat.</p>

      <p>The battery's push is called the <b>electromotive force</b> or <b>emf</b> (symbol \\(\\mathcal{E}\\)), which is a 
      stupid name because it's not a force, it's an energy per charge. It's measured in Volts, which is Joules per Coulomb. 
      So a 1.5V battery does 1.5 Joules of work on every Coulomb of charge that passes through it.</p>

      <p>An <i>ideal</i> battery gives a perfect, constant \\(\\mathcal{E}\\) no matter what. A <i>real</i> battery is a 
      bit crap and has <b>internal resistance</b>, \\(r\\). This means the actual voltage you get across its terminals 
      drops as you draw more current: \\(V = \\mathcal{E} - Ir\\). It's like the battery gets tired. For now, we'll 
      pretend all our batteries are perfect and ignore their internal drama.</p>

      <h3>Battery vs. Capacitor</h3>

      <p>Both can give you a shock, but they're not the same.</p>

      <ul>
          <li>A <b>battery</b> constantly pushes electrons around the circuit, ideally infinitely, without ever getting 
          tired or bored.</li>
          <li>A <b>capacitor</b> also gives the electrons a shove, but this time it gets tired overtime (i.e. it 
          discharges) until it eventually runs out of energy and gives up. How exactly this works, we'll look at later, 
          but for now, know that it just does.</li>
      </ul>

      <p>The energy stored is different too:</p>
      <ul>
          <li><b>Battery:</b> \\(U = Q\\mathcal{E}\\)</li>
          <li><b>Capacitor:</b> \\(U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}\\)</li>
      </ul>

      <p><i>Don't worry about this too much now though, we'll look at it more later.</i></p>

      <h3>The Rules of the Game: Ohm & Kirchhoff</h3>

      <p>To analyse these circuits, you need some rules. They're not fundamental laws of the universe, but they're 
      bloody useful.</p>

      <h4>Ohm's Law</h4>

      <p>For a lot of stuff (like resistors), the current \\(I\\) through it is proportional to the voltage \\(V\\) 
      across it. The constant of proportionality is the <b>resistance</b>, \\(R\\).</p>

      <p>\\[V = IR\\]</p>

      <p><i>Now just to be clear, this is not always true, only for so-called Ohmic conductors. Never fear though, all 
      the boring stuff we're dealing with right now are going to be Ohmic. And most things will end up being Ohmic. So 
      if you're ever stuck on an exam question, this is almost always a good place to start.</i></p>

      <h4>Kirchhoff's Junction Rule</h4>

      <p>This one's about current. At any junction in a circuit, all the current going in must equal all the current 
      coming out.</p>

      <p>\\[\\sum I_{in} = \\sum I_{out}\\]</p>

      <p>It's basically the law of conservation of charge. Electrons can't just vanish into thin air... usually.</p>

      <h4>Kirchhoff's Loop Rule</h4>

      <p>This one's about energy. If you take any closed loop in a circuit, the sum of all the voltage gains (from 
      batteries) and voltage drops (across resistors, etc.) must equal zero.</p>

      <p>\\[\\sum \\mathcal{E} + \\sum V = 0\\]</p>

      <p><i>Now that's the more technical definition, but the way I remember it, the voltage on top of the battery is 
      equal to all the voltages on top of everything else. If you think about it, this is just the law of energy 
      conservation wearing a funny hat. You can't get more energy out of a loop than you put in, and since voltage is 
      just energy per coulomb...</i></p>

      <h4>Power</h4>

      <p>When current flows through a resistor, energy is lost as heat. The power \\(P\\) is a measure of how quickly the 
      energy flows out (in Watts, J/s). The power dissipated determined by this formula:</p>

      <p>\\[P = VI\\]</p>

      <p>This is pretty cool, but we can make it even cooler. Using Ohm's Law (\\(V = IR\\)), our equation can shapeshift 
      into different equations. You can then pick and choose which one you want depending on which variables they give 
      you in the exam:</p>
      <p>\\[P = I^2R = \\frac{V^2}{R}\\]</p>

      <p><i>And by the way, if you haven't seen both Ohm's law and the power equation before (in which case, why are you
      studying physics at university?), then they may appear quite similar, and therefore you may have a hard time 
      remembering which one is which. My advice to you is... just bloody learn it. There's nothing more to it, just suck 
      it up, maybe a bit of dimensional analysis if you want, but yeah, just figure it out. The sooner the better.</i></p>

      <h3>Resistors: Teamwork</h3>

      <p>You can stick resistors together in two ways: series or parallel. The goal is often to replace a complicated 
      mess with one <b>equivalent resistor</b>, \\(R_{eq}\\).</p>

      <ul>
          <li><b>In Series:</b> The current has no choice but to go through one then the other. The total resistance is 
          just the sum:
              \\[R_{eq} = R_1 + R_2 + R_3 + ...\\]</li>
          <li><b>In Parallel:</b> The current can split up and take different paths. The voltage across each is the same. 
          Here, you add the <i>reciprocals</i>:
              \\[\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ...\\]</li>
      </ul>

      <p>For two resistors in parallel, this simplifies to \\(R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}\\).</p>

      <p><i>Here comes another lovely analogy, this time I believe I got it from UpLearn, which my school paid for. 
      Imagine you are waiting in line for a concert, and there is a security checky place, idk what you call them I 
      don't go to concerts, and to enter the concert, you must be checked, in case you have something illegal. This 
      is obviously necessary but will slow the people-entery process down a fair bit.</i></p>

      <p><i>Now put another security checky place right after it, so now you need to be checked twice. This will slow 
      you down even more. And the more security checky places you put after each other, the longer it takes for the 
      people to actually enter.</i></p>

      <p><i>But what if you put another security checky thing next to the first one instead? Well now twice as many 
      people can get checked at once, meaning things move twice as fast. Put a third one, and it's thrice as fast. 
      And the more security checky things you put next to each other; the more people can enter.</i></p>

      <p><i>Surely, I shouldn't have to explain this analogy to you, right? The people are electrons, the checky places 
      are resistors, the resistors allow more electrons in when in parallel?</i></p>

      <h3>Capacitors</h3>

      <p><i>Hey, remember these guys from earlier? Whom I told you not to worry about? Well guess what, it's worrying 
      time!</i></p>

      <p>Capacitors are fundamentally pretty simple objects. They are made of two parallel metal plates. You switch 
      the circuit on, which causes the electrons to flow from one plate, around the circuit to the other plate. Now 
      that there is a bunch of electrons on one plate and none on the other, there is an electric field produced 
      between the two plates. This stores charge. The charge \\(Q\\) stored is proportional to the voltage \\(V\\) 
      across it:</p>
      <p>\\[Q = CV\\]</p>
      <p>where \\(C\\) is the <b>capacitance</b>, measured in Farads.</p>

      <p>They can also be combined:</p>

      <ul>
          <li><b>In Parallel:</b> The voltage is the same. The total capacitance is the sum:
              \\[C_{eq} = C_1 + C_2 + ...\\]</li>
          <li><b>In Series:</b> The charge on each is the same. You add the <i>reciprocals</i>:
              \\[\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + ...\\]</li>
      </ul>

      <p><i>(Notice this is the opposite way round to resistors! Annoying, innit? Just deal with it...)</i></p>

      <h3>RC Circuits</h3>

      <p>Now, stick a resistor and a capacitor together in series with a battery and a switch. Now we have 
      <b>time-dependent behaviour</b>! The capacitor charges and discharges, but not instantly.</p>

      <h4>Charging a Capacitor</h4>

      <p>You start with an uncharged capacitor and flip the switch. Initially, the current is max: 
      \\(I_0 = \\mathcal{E}/R\\).</p>

      <p>As charge builds up on the capacitor, it pushes back against the battery's voltage. The current decreases over 
      time. Using Kirchhoff's rules, you get a differential equation for the charge \\(Q\\):</p>

      <p>\\[R \\frac{dQ}{dt} + \\frac{Q}{C} = \\mathcal{E}\\]</p>

      <p>Solve this, and you get:</p>

      <p>\\[Q(t) = Q_{final} \\left(1 - e^{-t/RC}\\right) = \\mathcal{E}C \\left(1 - e^{-t/RC}\\right)\\]</p>
      <p>\\[I(t) = I_0 e^{-t/RC} = \\frac{\\mathcal{E}}{R} e^{-t/RC}\\]</p>

      <p>The product \\(RC\\) is called the <b>time constant</b>, \\(\\tau\\). It's the time it takes for the charge 
      to reach about 63% of its final value, or the current to drop to 37% of its initial value. It's a measure of how 
      <i>slowly</i> the circuit charges up.</p>

      <h4>Discharging a Capacitor</h4>

      <p>Now, start with a charged capacitor, remove the battery, and close the loop. The capacitor now acts like a 
      temporary battery itself.</p>

      <p>The differential equation loses the \\(\\mathcal{E}\\) term:</p>
      <p>\\[R \\frac{dQ}{dt} + \\frac{Q}{C} = 0\\]</p>

      <p>The solution is a simple decay:</p>

      <p>\\[Q(t) = Q_0 e^{-t/RC}\\]</p>
      <p>\\[I(t) = I_0 e^{-t/RC}\\]</p>

      <p>And that's it! The current flows <i>backwards</i> compared to the charging case as the capacitor empties itself out. Again, the time constant \\(\tau = RC\\) tells you how long it takes to discharge.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>EMF: \\( \\varepsilon \\) — energy per charge from battery</li>
        <li>Ohm’s Law: \\( V = IR \\)</li>
        <li>Junction Rule: \\( \\sum I_{\\text{in}} = \\sum I_{\\text{out}} \\)</li>
        <li>Loop Rule: \\( \\sum \\Delta V = 0 \\)</li>
        <li>Series: \\( R_{\\text{eq}} = R_1 + R_2 + \\cdots \\)</li>
        <li>Parallel: \\( 1/R_{\\text{eq}} = 1/R_1 + 1/R_2 + \\cdots \\)</li>
        <li>Maxwell loops: assume loop currents, apply loop rule</li>
      </ul>

      <p>And remember: the universe doesn’t care how many resistors you have.  
      It only cares about conservation of charge and energy.</p>
      `,
    },
  "charge": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Electric Charge and Field: When Stuff Starts to Push</h3>

      <p>Right. Let’s talk about <strong>electric charge</strong>.</p>

      <p>No, not the kind you pay for your phone. We’re talking about <strong>q</strong> — the property that makes things attract or repel.</p>

      <p>There are two types: positive and negative. Like charges repel. Opposites attract. Simple.</p>

      <h3>Coulomb’s Law: The Force Between Charges</h3>

      <p>For two point charges:</p>

      <p>\\( \\vec{F} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r} \\)</p>

      <p>Where \\( \\epsilon_0 \\) is the permittivity of free space.</p>

      <p>Direction? Along the line joining them. Repulsive if same sign, attractive if opposite.</p>

      <h3>Electric Field: Force Per Unit Charge</h3>

      <p>The electric field at a point is the force a test charge would feel, divided by its charge:</p>

      <p>\\( \\vec{E} = \\frac{\\vec{F}}{q_0} \\)</p>

      <p>For a point charge:</p>

      <p>\\( \\vec{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\hat{r} \\)</p>

      <p>Field lines point away from positive, toward negative.</p>

      <h3>Superposition: Fields Add, Not Cancel</h3>

      <p>For multiple charges, the total field is the vector sum of individual fields.</p>

      <p>So yes — you have to add them as vectors. No shortcuts.</p>

      <h3>Continuous Charge Distributions</h3>

      <p>For a line, surface, or volume of charge:</p>

      <p>\\( \\vec{E} = \\int \\frac{1}{4\\pi\\epsilon_0} \\frac{dq}{r^2} \\hat{r} \\)</p>

      <p>Where \\( dq = \\lambda dl \\), \\( \\sigma dA \\), or \\( \\rho dV \\).</p>

      <p>And yes — the integral is usually a pain. But symmetry helps.</p>

      <h3>Dipoles: When You’ve Got +q and -q Close Together</h3>

      <p>A dipole has zero net charge, but still creates a field.</p>

      <p>Dipole moment: \\( \\vec{p} = q \\vec{d} \\), from -q to +q.</p>

      <p>On the axis: \\( E \\approx \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3} \\)</p>

      <p>Perpendicular: \\( E \\approx \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3} \\)</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Coulomb’s Law: \\( F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2} \\)</li>
        <li>Electric field: \\( \\vec{E} = \\vec{F}/q_0 \\)</li>
        <li>Point charge: \\( E = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\)</li>
        <li>Superposition: vector sum</li>
        <li>Continuous: \\( \\vec{E} = \\int \\frac{1}{4\\pi\\epsilon_0} \\frac{dq}{r^2} \\hat{r} \\)</li>
        <li>Dipole: \\( \\vec{p} = q \\vec{d} \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how charged you feel.  
      It only cares about the electric field.</p>
      `,
    },
  "gauss-law": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Gauss’s Law</h3>

      <p>Right. Let’s talk about <strong>Gauss’s Law</strong>.</p>

      <p>No, not the mathematician. We’re talking about the law that says:</p>

      <p>\\( \\Phi_E = \\frac{Q_{\\text{encl}}}{\\epsilon_0} \\)</p>

      <p>Where \\( \\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} \\) is the electric flux through a closed surface.</p>

      <p>It’s not about calculating \\( E \\) directly. It’s about using symmetry to make it easy.</p>

      <h3>When to Use Gauss’s Law</h3>

      <p>Only when there’s symmetry:</p>
      <ul>
        <li><strong>Spherical</strong>: point charge, charged sphere</li>
        <li><strong>Cylindrical</strong>: infinite line of charge</li>
        <li><strong>Planar</strong>: infinite sheet of charge</li>
      </ul>

      <p>If no symmetry? Use Coulomb’s Law or integration.</p>

      <h3>How to Apply It</h3>

      <ol>
        <li>Choose a Gaussian surface that matches the symmetry.</li>
        <li>Make sure \\( \\vec{E} \\) is constant and perpendicular to the surface.</li>
        <li>Calculate \\( \\oint \\vec{E} \\cdot d\\vec{A} = E \\times \\text{area} \\)</li>
        <li>Find \\( Q_{\\text{encl}} \\)</li>
        <li>Solve for \\( E \\)</li>
      </ol>

      <h3>Examples</h3>

      <p><strong>Point charge</strong>: \\( E = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\)</p>

      <p><strong>Infinite line charge</strong>: \\( E = \\frac{1}{2\\pi\\epsilon_0} \\frac{\\lambda}{R} \\)</p>

      <p><strong>Infinite sheet</strong>: \\( E = \\frac{\\sigma}{2\\epsilon_0} \\)</p>

      <p><strong>Charged sphere</strong>: Outside: \\( E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2} \\), Inside: \\( E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q r}{a^3} \\)</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Gauss’s Law: \\( \\oint \\vec{E} \\cdot d\\vec{A} = Q_{\\text{encl}} / \\epsilon_0 \\)</li>
        <li>Use for symmetric charge distributions</li>
        <li>Choose Gaussian surface wisely</li>
        <li>Flux depends only on enclosed charge</li>
        <li>Outside sphere: \\( E \\propto 1/r^2 \\), Inside: \\( E \\propto r \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how many surfaces you draw.  
      It only cares about the flux.</p>
      `,
    },
  "potential": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Electric Potential and Potential Energy: When Voltage Isn’t Just a Battery Thing</h3>

      <p>Right. Let’s talk about <strong>electric potential</strong>.</p>

      <p>No, not the kind where you *could* do something if you tried. We’re talking about <strong>electric potential energy</strong> — the energy stored when you move charges around in an electric field.</p>

      <p>Think of it like gravity. Lift a book, you do work. The energy goes into gravitational potential energy. Same idea here — but with charges and fields.</p>

      <h3>Work and Potential Energy: The Physics of Effort</h3>

      <p>When a force acts on something, it can do work:</p>

      <p>\\( W = \\vec{F} \\cdot \\vec{d} \\)</p>

      <p>For a conservative force (like the electric force), the work done depends only on start and end points — not the path.</p>

      <p>So we define <strong>potential energy</strong> \\( U \\) such that:</p>

      <p>\\( W_{a \\to b} = U_a - U_b \\)</p>

      <p>And for two point charges:</p>

      <p>\\( U = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r} \\)</p>

      <p>Positive if same sign (repulsive), negative if opposite (attractive).</p>

      <h3>Electric Potential: Energy Per Unit Charge</h3>

      <p>Now, what if you want to know how much energy a *test charge* would have at a point?</p>

      <p>That’s <strong>electric potential</strong>, \\( V \\):</p>

      <p>\\( V = \\frac{U}{q_0} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r} \\)</p>

      <p>Units: volts. 1 V = 1 J/C.</p>

      <p>And yes — potential is a scalar. No vectors. No mess.</p>

      <h3>Calculating Potential from Field</h3>

      <p>You can also get potential from the electric field:</p>

      <p>\\( V_a - V_b = \\int_b^a \\vec{E} \\cdot d\\vec{l} \\)</p>

      <p>So potential difference is the line integral of the field.</p>

      <p>And if you know \\( V \\), you can get \\( \\vec{E} \\) back:</p>

      <p>\\( \\vec{E} = -\\nabla V \\)</p>

      <p>That minus sign? Crucial. Field points from high to low potential.</p>

      <h3>Equipotential Surfaces: Where Voltage Stays the Same</h3>

      <p>An <strong>equipotential surface</strong> is where \\( V \\) is constant.</p>

      <p>No work is done moving a charge along it — because \\( \\vec{E} \\) is perpendicular to it.</p>

      <p>Like contour lines on a map — but for voltage.</p>

      <h3>Earthing/Grounding: When You’re at Zero (By Definition)</h3>

      <p>“Ground” is just a reference point — we define \\( V = 0 \\) there.</p>

      <p>If you connect a conductor to ground, charge can flow to make its potential zero.</p>

      <p>Important for safety — and for stopping your electronics from frying.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>\\( \\Delta U = -W \\) — work done by field</li>
        <li>\\( U = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r} \\)</li>
        <li>\\( V = U/q_0 \\) — potential is energy per charge</li>
        <li>\\( \\Delta V = \\int \\vec{E} \\cdot d\\vec{l} \\)</li>
        <li>\\( \\vec{E} = -\\nabla V \\)</li>
        <li>Equipotentials: \\( V \\) constant, \\( \\vec{E} \\perp \\) surface</li>
        <li>Grounding: sets \\( V = 0 \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how many volts you have.  
      It only cares about the potential difference.</p>
      `,
    },
  "capacitance": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Capacitance, Dielectrics, and Current Flow: When You Store Energy in Empty Space</h3>

      <p>Right. Let’s talk about <strong>capacitors</strong>.</p>

      <p>No, not the kind that makes your washing machine start. We’re talking about <strong>devices that store charge and energy in an electric field</strong>.</p>

      <h3>Capacitance: How Much Charge Per Volt?</h3>

      <p>Capacitance \\( C \\) is defined as:</p>

      <p>\\( C = \\frac{Q}{V} \\)</p>

      <p>More capacitance = more charge stored per volt.</p>

      <p>Examples:</p>
      <ul>
        <li><strong>Parallel plate</strong>: \\( C = \\epsilon_0 A / d \\)</li>
        <li><strong>Cylindrical</strong>: \\( C = 2\\pi\\epsilon_0 L / \\ln(b/a) \\)</li>
        <li><strong>Spherical</strong>: \\( C = 4\\pi\\epsilon_0 ab/(b-a) \\)</li>
      </ul>

      <h3>Energy Stored in a Capacitor</h3>

      <p>When you charge a capacitor, you do work. That energy is stored:</p>

      <p>\\( U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V \\)</p>

      <p>But where is it stored?</p>

      <p>In the <strong>electric field</strong>.</p>

      <p>We define <strong>energy density</strong>:</p>

      <p>\\( u = \\frac{1}{2} \\epsilon_0 E^2 \\)</p>

      <p>So yes — energy is stored in the field, not the plates.</p>

      <h3>Dielectrics: When You Make a Capacitor Better</h3>

      <p>Insert a dielectric (insulator) between the plates?</p>

      <p>Capacitance increases by a factor \\( \\epsilon_r \\), the <strong>relative permittivity</strong>.</p>

      <p>Why? The dielectric polarizes — creates an opposing field — so you can store more charge at the same voltage.</p>

      <p>But there’s a limit: <strong>dielectric breakdown</strong>. Too high a field → it conducts → capacitor dies.</p>

      <p>For air: \\( E_{\\text{max}} \\approx 3 \\times 10^6 \\, \\text{V/m} \\).</p>

      <h3>Current and Resistance</h3>

      <p>Current \\( I = dQ/dt \\)</p>

      <p>Ohm’s Law: \\( V = IR \\)</p>

      <p>Resistivity \\( \\rho \\): property of material</p>

      <p>Resistance \\( R = \\rho L / A \\)</p>

      <p>Simple. But deadly if you forget it.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>\\( C = Q/V \\)</li>
        <li>\\( U = \\frac{1}{2} C V^2 \\)</li>
        <li>Energy density: \\( u = \\frac{1}{2} \\epsilon_0 E^2 \\)</li>
        <li>Dielectric: increases \\( C \\) by \\( \\epsilon_r \\)</li>
        <li>Dielectric breakdown: max field before conduction</li>
        <li>\\( I = V/R \\), \\( R = \\rho L / A \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how much charge you store.  
      It only cares about the electric field.</p>
      `,
    },
  "magnetic-fields": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Magnetic Forces and Magnetic Fields: When Moving Charges Get Pushed</h3>

      <p>Right. Let’s talk about <strong>magnetic forces</strong>.</p>

      <p>No, not the kind that makes you fall in love. We’re talking about the force on a <strong>moving charge</strong> in a magnetic field.</p>

      <h3>The Lorentz Force: The Full EM Force</h3>

      <p>The total electromagnetic force on a charge is:</p>

      <p>\\( \\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) \\)</p>

      <p>The \\( \\vec{v} \\times \\vec{B} \\) part is the magnetic force.</p>

      <p>Direction? Right-hand rule. Magnitude? \\( F = qvB\\sin\\theta \\)</p>

      <p>And yes — it’s perpendicular to both \\( \\vec{v} \\) and \\( \\vec{B} \\).</p>

      <h3>Magnetic Flux and Field Lines</h3>

      <p>Magnetic field lines show the direction of \\( \\vec{B} \\).</p>

      <p>They form closed loops — no start, no end.</p>

      <p>Because: \\( \\nabla \\cdot \\vec{B} = 0 \\) — no magnetic monopoles.</p>

      <p>Flux: \\( \\Phi_B = \\int \\vec{B} \\cdot d\\vec{A} \\)</p>

      <p>Units: webers (Wb).</p>

      <h3>Work Done by Magnetic Field</h3>

      <p>Here’s the kicker: the magnetic force does <strong>zero work</strong>.</p>

      <p>Because it’s always perpendicular to velocity — so it changes direction, not speed.</p>

      <p>So magnetic fields don’t speed up charges. They just bend their paths.</p>

      <h3>Force on a Current-Carrying Wire</h3>

      <p>Wire of length \\( L \\), current \\( I \\), in field \\( \\vec{B} \\):</p>

      <p>\\( \\vec{F} = I \\vec{L} \\times \\vec{B} \\)</p>

      <p>Because current is moving charges — and they all get pushed.</p>

      <h3>Torque on a Current Loop</h3>

      <p>Loop with area \\( A \\), current \\( I \\), in field \\( \\vec{B} \\):</p>

      <p>\\( \\vec{\\tau} = \\vec{\\mu} \\times \\vec{B} \\)</p>

      <p>Where \\( \\vec{\\mu} = I \\vec{A} \\) is the magnetic moment.</p>

      <p>This is how motors work.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Lorentz force: \\( \\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) \\)</li>
        <li>Magnetic force: \\( \\perp \\) to \\( \\vec{v} \\) and \\( \\vec{B} \\)</li>
        <li>\\( \\nabla \\cdot \\vec{B} = 0 \\) — no magnetic monopoles</li>
        <li>\\( \\Phi_B = \\int \\vec{B} \\cdot d\\vec{A} \\)</li>
        <li>Magnetic force does no work</li>
        <li>\\( \\vec{F} = I \\vec{L} \\times \\vec{B} \\)</li>
        <li>\\( \\vec{\\tau} = \\vec{\\mu} \\times \\vec{B} \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how fast your motor spins.  
      It only cares about the cross product.</p>
      `,
    },
  "magnetic-sources": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Sources of Magnetic Field: When Currents Make Fields</h3>

      <p>Right. Let’s talk about <strong>where magnetic fields come from</strong>.</p>

      <p>No, not the Earth’s core (well, yes, but not just that). We’re talking about <strong>moving charges</strong> — aka currents.</p>

      <h3>Biot-Savart Law: The Magnetic Version of Coulomb</h3>

      <p>For a moving charge or current element:</p>

      <p>\\( d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l} \\times \\hat{r}}{r^2} \\)</p>

      <p>It’s like Coulomb’s Law, but with a cross product.</p>

      <p>Direction? Right-hand rule again.</p>

      <h3>Applications</h3>

      <p><strong>Long straight wire</strong>: \\( B = \\frac{\\mu_0 I}{2\\pi r} \\)</p>

      <p><strong>Centre of loop</strong>: \\( B = \\frac{\\mu_0 I}{2a} \\)</p>

      <p><strong>Solenoid</strong>: \\( B = \\mu_0 n I \\) (inside, ideal)</p>

      <h3>Ampère’s Law: The Gauss’s Law of Magnetism</h3>

      <p>\\( \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{encl}} \\)</p>

      <p>Use it when there’s symmetry — just like Gauss’s Law.</p>

      <p>Examples:</p>
      <ul>
        <li>Infinite wire: \\( B = \\mu_0 I / (2\\pi r) \\)</li>
        <li>Inside wire (uniform current): \\( B \\propto r \\)</li>
        <li>Solenoid: \\( B = \\mu_0 n I \\)</li>
      </ul>

      <h3>TL;DR</h3>

      <ul>
        <li>Biot-Savart: \\( d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l} \\times \\hat{r}}{r^2} \\)</li>
        <li>Wire: \\( B = \\frac{\\mu_0 I}{2\\pi r} \\)</li>
        <li>Loop: \\( B = \\frac{\\mu_0 I}{2a} \\)</li>
        <li>Solenoid: \\( B = \\mu_0 n I \\)</li>
        <li>Ampère’s Law: \\( \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{encl}} \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how much current you have.  
      It only cares about the enclosed current.</p>
      `,
    },
  "induction": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Electromagnetic Induction: When Changing Fields Make Voltage</h3>

      <p>Right. Let’s talk about <strong>induction</strong>.</p>

      <p>No, not the kind at work. We’re talking about <strong>Faraday’s Law</strong> — when a changing magnetic field creates an electric field.</p>

      <h3>Faraday’s Law: emf from Changing Flux</h3>

      <p>\\( \\varepsilon = -\\frac{d\\Phi_B}{dt} \\)</p>

      <p>The induced emf is equal to the rate of change of magnetic flux.</p>

      <p>Minus sign? That’s Lenz’s Law — the induced current opposes the change.</p>

      <h3>Motional emf</h3>

      <p>Move a conductor in a magnetic field? Charges inside feel a force \\( \\vec{F} = q\\vec{v} \\times \\vec{B} \\).</p>

      <p>So emf is induced:</p>

      <p>\\( \\varepsilon = B l v \\)</p>

      <p>Like in a generator.</p>

      <h3>Lenz’s Law: Nature Says “No” to Change</h3>

      <p>The induced current creates a field that opposes the change in flux.</p>

      <p>So if flux is increasing, the induced field points opposite.</p>

      <p>It’s like the universe is conservative — hates change.</p>

      <h3>Induced Electric Fields</h3>

      <p>A changing \\( \\vec{B} \\) creates a curly \\( \\vec{E} \\) — even in empty space.</p>

      <p>\\( \\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt} \\)</p>

      <p>So \\( \\vec{E} \\) is no longer conservative.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Faraday’s Law: \\( \\varepsilon = -d\\Phi_B/dt \\)</li>
        <li>Motional emf: \\( \\varepsilon = B l v \\)</li>
        <li>Lenz’s Law: induced effects oppose change</li>
        <li>Induced \\( \\vec{E} \\) is non-conservative</li>
        <li>Changing \\( \\vec{B} \\) → \\( \\vec{E} \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how much emf you induce.  
      It only cares about the rate of change.</p>
      `,
    },
  "inductance": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>Inductance: When Coils Fight Change</h3>

      <p>Right. Let’s talk about <strong>inductance</strong>.</p>

      <p>No, not the kind that makes you zone out. We’re talking about <strong>inductors</strong> — coils that resist changes in current.</p>

      <h3>Mutual Inductance</h3>

      <p>Two coils close together: current in one induces emf in the other.</p>

      <p>\\( \\varepsilon_2 = -M \\frac{dI_1}{dt} \\)</p>

      <p>\\( M \\) is mutual inductance — depends on geometry and alignment.</p>

      <h3>Self Inductance</h3>

      <p>A single coil resists changes in its own current:</p>

      <p>\\( \\varepsilon = -L \\frac{dI}{dt} \\)</p>

      <p>\\( L \\) is self-inductance. Unit: henry (H).</p>

      <p>For a solenoid: \\( L = \\mu_0 n^2 A l \\)</p>

      <h3>Energy Stored in an Inductor</h3>

      <p>Energy is stored in the magnetic field:</p>

      <p>\\( U = \\frac{1}{2} L I^2 \\)</p>

      <p>Energy density: \\( u = \\frac{1}{2\\mu_0} B^2 \\)</p>

      <h3>Inductors in Series and Parallel</h3>

      <p><strong>Series</strong>: \\( L_{\\text{eq}} = L_1 + L_2 + \\cdots \\)</p>

      <p><strong>Parallel</strong>: \\( \\frac{1}{L_{\\text{eq}}} = \\frac{1}{L_1} + \\frac{1}{L_2} + \\cdots \\)</p>

      <h3>LRC Circuits</h3>

      <p>Resistor, inductor, capacitor in series — driven by AC.</p>

      <p>Impedance: \\( Z = R + i(\\omega L - 1/\\omega C) \\)</p>

      <p>Resonance at \\( \\omega_0 = 1/\\sqrt{LC} \\)</p>

      <h3>TL;DR</h3>

      <ul>
        <li>\\( \\varepsilon = -L dI/dt \\)</li>
        <li>\\( U = \\frac{1}{2} L I^2 \\)</li>
        <li>Series: \\( L_{\\text{eq}} = L_1 + L_2 + \\cdots \\)</li>
        <li>Parallel: \\( 1/L_{\\text{eq}} = 1/L_1 + 1/L_2 + \\cdots \\)</li>
        <li>Resonance: \\( \\omega_0 = 1/\\sqrt{LC} \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how fast you change the current.  
      It only cares about the inductance.</p>
      `,
    },
  "ac-circuits": {
    title: "Turn up the heat, Soulburner!",
    content: `
      <h3>AC Circuits: When Electrons Can’t Make Up Their Mind</h3>

      <p>Right. Let’s talk about <strong>AC circuits</strong>.</p>

      <p>No, not the kind with air conditioning. We’re talking about <strong>alternating current</strong> — where voltage and current flip direction 50 times a second.</p>

      <p>It’s chaos. But we can handle it.</p>

      <h3>RMS Values: The Average That Actually Works</h3>

      <p>For a sinusoidal voltage \\( V(t) = V_0 \\cos(\\omega t) \\), the average is zero. Useless.</p>

      <p>So we use the <strong>root-mean-square</strong>:</p>

      <p>\\( V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} \\), \\( I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\)</p>

      <p>This gives the equivalent DC value for power dissipation.</p>

      <h3>Complex Impedance: The One Formula to Rule Them All</h3>

      <p>Impedance \\( Z \\) is like resistance, but for AC.</p>

      <p>It’s complex: \\( Z = R + iX \\), where \\( X \\) is reactance.</p>

      <ul>
        <li><strong>Resistor</strong>: \\( Z_R = R \\)</li>
        <li><strong>Capacitor</strong>: \\( Z_C = \\frac{1}{i\\omega C} \\)</li>
        <li><strong>Inductor</strong>: \\( Z_L = i\\omega L \\)</li>
      </ul>

      <p>Now you can use \\( \\tilde{V} = \\tilde{I} Z \\), just like Ohm’s Law.</p>

      <h3>Series LRC Circuit: The Classic Example</h3>

      <p>Total impedance:</p>

      <p>\\( Z = R + i\\left(\\omega L - \\frac{1}{\\omega C}\\right) \\)</p>

      <p>Resonance when \\( \\omega L = 1/\\omega C \\) → \\( \\omega_0 = 1/\\sqrt{LC} \\)</p>

      <p>At resonance, \\( Z = R \\), current is max, power is max.</p>

      <h3>Power in AC Circuits</h3>

      <p>Average power:</p>

      <p>\\( \\langle P \\rangle = I_{\\text{rms}} V_{\\text{rms}} \\cos\\phi \\)</p>

      <p>Where \\( \\cos\\phi = R/|Z| \\) is the power factor.</p>

      <p>Capacitors and inductors store and release energy — they don’t dissipate it.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>\\( V_{\\text{rms}} = V_0 / \\sqrt{2} \\)</li>
        <li>Impedance: \\( \\tilde{V} = \\tilde{I} Z \\)</li>
        <li>\\( Z_R = R \\), \\( Z_C = 1/(i\\omega C) \\), \\( Z_L = i\\omega L \\)</li>
        <li>Series LRC: \\( Z = R + i(\\omega L - 1/\\omega C) \\)</li>
        <li>Resonance: \\( \\omega_0 = 1/\\sqrt{LC} \\)</li>
        <li>Power: \\( \\langle P \\rangle = I_{\\text{rms}} V_{\\text{rms}} \\cos\\phi \\)</li>
      </ul>

      <p>And remember: the universe doesn’t care how much your phone charger buzzes.  
      It only cares about the impedance.</p>
      `,
    },
  "e-m-summary": {
    title: "Turn up the heat, Soulburner!",
    content: `

      `,
    },

  // Subtopics for Quantum I
  "quantumI-intro": {
      title: "Physics is bare weird y'know...",
      content: `
        
      <i>Fun fact, if you've ever wondered how I got the idea to create this website, in preparation for my Quantum Phenomena
      exam, I made the summary sheets that I have at the end of each topic for both Quantum I & II. I then put it in my 
      physics tutorial group chat, and after the typical "Oh my goodness, these are sooooooo good!!!" one guy suggested me
      giving them to the department, to which I said, no, 'cus I ain't tryna raise no grade boundaries. Then another guy
      said, you could sell them, to which i said, ":o", and he then suggested I make a website. And here we are!!! </i>

      <h2>Introduction to Quantum Phenomena</h2>

        <p>Quantum physics is something people here about and immediately freak out about, which if I'm honest has never made
        sense to me. Like, when people ask me what my favourite part of physics is and I say 'Quantum' they always think 
        "WOOOOOW!!! That's sound really difficult! You're soooo smart!" To which I'm like, m8, excuse me? It sounds difficult? 
        You've never done it, that's why it sounds difficult. And mind you, you probably do some fake-ass subject like 
        sociology, a bloody termite at Cov market is probably smart to you!</p>

        <p>Anyway...</p>

        <p>The reason I include that momentary crashout is to ensure you that quantum physics isn't nearly as scary as people
        make it out to be. And if you want some more assurance... this first section (i.e. Quantum I) is pretty much just
        a bunch of maths. Stuff like integration and differentiation. I mean, you tell me, is differentiation scary to you?
        If it is then IDK why you're doing physics...</p>
        
        <p>But anyway, you get the point. Now usually Quantum Physics information begins with a bunch of history, about who
        did what, when they did it, why they did it, etc etc. Normally I'd just say ignore it, but to be fair this is actually
        quite interesting, so I'll explain it all here, but give my usual unserious summary as to try not to bore you.</p>

        <p>We start our journey at the end of the 19th century. At this point, we have 3 main streams of physics:
        <ul>
          <li>Waves</li>
          <li>Thermodynamics</li>
          <li>Classical Mechanics</li>
        </ul>
        These three streams lived together peacefully, on one condition. They each left each other alone. Because whenever they
        tried to mix, the laws of physics kinda get all kerfluffled. </p>
        <p> For example, let's try and combine Thermodynamics with Waves. 

        <h3>You will learn</h3>
        <ul>
          <li>The experiments, discoveries and thinking behind Quantum Physics</li>
          <li>The foundations of Quantum Mechanics</li>
          <li>How to solve problems using Quantum Mechanics</li>
        </ul>

        <p>Have fun!!!</p>
      `,
    },
  "photons": {
      title: "Photons",
      content: `
        
      <i>By the way, this is one of the first pages I've worked on, despite it being towards the end of all the content.
      Nevertheless, I can tell I'm probably going to be making a lot of Yu-Gi-Oh references in my notes (Galaxy Eyes Photon
      Dragon is from Yu-Gi-Oh if you were wondering). So I apologise in advance for any you will see from now on (and I
      apologise in subtract-vance for all the ones you've already had to deal with). </i>

      <h3>The photoelectric effect</h3>
      <p> I've got myself a piece of metal, which, in typical metallic fashion, are filled with delocalised electrons. I, 
      being the great human I am, inform the electrons that they too can bask in the freedom of the outside world, that there
      is more to life than mindlessly grazing with metal cations. </p>
      <p> "Oi! Electrons! Get the bloody 'ell over 'ere right now!!!" I said softly. </p>
      <p> "Erm, ex-KYOOZ me, 'oo d'you fink you're talkin' too like vat?" they responded excitedly.</p> 
      <p> "Right, I ain't being funny, get yer arse over 'ere, or else!" </p>
      <p> "Are you 'avin a laf, mate? In fact, y'know wot, I actually 'aven't got enough energy to deal wiv this, just jog on!" </p>
      <p> And at that point I realised the issue. As much as they really wanted to come with me to the outside world, there was
      one thing holding them back: <i> They didn't have enough energy! </i></p>
      <p> So let's get 'em some energy! </p>
      <p> Luckily, I've got myself a red laser which I can shine at the electrons. That's sure to give them the energy they need
      to free themselves from their cationic prison. So I made my way back to the electrons, who were delighted to see me: </p>
      <p> "Oi, knobhead, din' I already tell ya to leave me the bloomin' 'eck alone" they exclame in anticipation </p>
      <p> "I told you to get off this chavy ol' piece o' metal, and that clearly din' do nuffin, did it, mate? Now shut your
      mouf an' 'ave some o' this," I say, as I begin to flash the laser on them.
      <p> "Erm, do you MIND?!" </p>
      <p> "What part o' 'shut you mouf' ain't we understandin'? Just wait, bimbo. </p>
      <p>...</p>
      <p> "If I'm being honest mate, you look like a right bellend, you do..."</p>
      <p> "JUST FLIPPIN' WAIT MAN! GOODNESS GRACIOUS ME!" </p>
      <p>...</p>
      <p> "You DO know that no amount of low energy light is gonna make us move, right? You didn't forget that did ya?" </p>
      <p> "NO!!!</p>
      <p> Truth is I hadn't forgotten... I didn't know it in the first place! I mean, what gives? Light is a wave, right? So
      in typical wave fashion, the longer I leave it there, the more energy builds up, until eventually they'd get enough.
      I mean I even tried increasing the intensity, that should give 'em even more energy! But nothing! I could go to
      the shop to buy a blue laser, but I'm too full of myself to have to suffer the aura debt of admitting I was wrong... </p>
      <p> *In Yugi Muto's voice* <i> This is bad, we have been completely surrounded. But there is too much at stake for us
      to loose now. We've got to do somethi... Oh wait, this red laser comes with a colour switch? That's handy! ^_^ </i></p>
      <p> So I change the colour to blue... and whaddo you know! The electrons start leaving!</p>
      <p>...but why?</p>

      <h4> The solution </h4>

      <p> A solution to this apparent problem was proposed by none other than good ol' Albert Einstein himself. He suggested
      that light exists, not simply as a wave, but as descrete packets of energy known as photons. Each photon has energy
      in terms of \\(h\\nu\\), such that any one photon has energy \\(nh\\nu\\). In the case of the photoelectric effect,
      each electron interacts with each photon on a one-to-one basis. </p>
      <p> For an electron to has enough energy to leave the metal, it needs to receive energy larger than the metal's work
      function, \\(\\phi_0\\). However as the interactions are one-to-one, if a low-energy photon interacts with the electron,
      the electron remains pretty much unaffected. This also explains why changing the intensity made no difference: since
      the electrons couldn't really interact with red photons, it doesn't matter if you give them one photon or a billion,
      because all one billion will go to the electron and leave upon realising it isn't energetic enough. </p>
      <p> However, since blue photons have enough energy, the electron is able to leave. The amount of energy it leaves with
      is basically the amount of energy the photon gave it, take away the energy needed to liberate the electron (i.e. the
      work function), such that the escape energy, \\(E = h\\nu - \\phi_0\\).

      `,
    },
  "mass-spectra": {
      title: "Mass And Spectra",
      content: `
        
      <i>Jokey little intro again</i>

      <h3>Emission spectra</h3>
      <p> An emission spectrum is what you get when you give a gas a tonne of energy. The gas then spits the energy back at
      us in the form of photons, and the lines that we see are visible photons. </p>
      <p> At first this seems innocent enough, but let's take a closer look. We'll focus on hydrogen emission spectra, just
      'cus they're much easier to deal with. You may notice that the photons only appear at 
      <span class="popup-trigger" data-popup-id="emission spectra">certain frequencies</span>.
      <p> Why is this a problem, you ask? Well think about it: the classical model depicts the electron orbiting the atom like
      a planet orbits a star. This circular motion means it is accelerating towards the nucleus, which requires energy. Accelerating
      charges release light, which should cause it to keep on losing energy. As this is happening, not only should the 
      light emitted be constantly decreasing in frequency (resulting in a contumuous spectrum covering all frequencies), but
      the electron upon losing energy won't have the speed to maintain its radius, so it will spiral into the nucleus and
      collapse in on itself. </p>
      <p> Both of these dont happen, so the classical model must be wrong.</p>
      
      <h4>The solution</h4>
      <p> Bohr suggested that, since the gas originally took in energy as photons with energy \\(h\\nu\\), then each line
      on the spectrum represents a transition from one orbit with energy \\(E_i\\) and another orbit with energy \\(E_f\\).
      Or in mathematicianese:
      \\[
      h\\nu = \\frac{hc}{\\lambda} = E_f - E_i
      \\]
      If we do <span class="popup-trigger" data-popup-id="bohr energy">a bit more maths</span>, we eventually get:
      \\[
      E_i=-\\frac{R}{m^2}, \\quad E_f=-\\frac{R}{n^2},\\quad m < n
      \\]
      The negatives are important. </p>

      <h3>Hydrogen Emission Spectrum Simulator</h3>
      <div class="demo">
        <div class="simulation-container">
            <div class="simulation-content">

                <div class="atom-container">
                    <div class="nucleus"></div>
                    <div class="energy-levels">
                        <div class="energy-level" data-level="1"></div>
                        <div class="energy-level" data-level="2"></div>
                        <div class="energy-level" data-level="3"></div>
                        <div class="energy-level" data-level="4"></div>
                        <div class="energy-level" data-level="5"></div>
                    </div>
                    <div class="electron" id="electron"></div>
                </div>
                
                <div class="spectrum-display">
                    <h4>Emission Spectrum</h4>
                    <div class="spectrum-line" id="line-2-1" data-transition="2→1"></div>
                    <div class="spectrum-line" id="line-3-1" data-transition="3→1"></div>
                    <div class="spectrum-line" id="line-4-1" data-transition="4→1"></div>
                    <div class="spectrum-line" id="line-5-1" data-transition="5→1"></div>
                    <div class="spectrum-line" id="line-3-2" data-transition="3→2"></div>
                    <div class="spectrum-line" id="line-4-2" data-transition="4→2"></div>
                    <div class="spectrum-line" id="line-5-2" data-transition="5→2"></div>
                    <div class="spectrum-line" id="line-4-3" data-transition="4→3"></div>
                    <div class="spectrum-line" id="line-5-3" data-transition="5→3"></div>
                    <div class="spectrum-line" id="line-5-4" data-transition="5→4"></div>
                </div>
                
            </div> 

            <div class="controls">
                <p>Click an energy level to excite the electron, then watch it emit photons!</p>
                <div class="energy-buttons">
                    <button id="level-1">n=1 (Ground State)</button>
                    <button id="level-2">n=2</button>
                    <button id="level-3">n=3</button>
                    <button id="level-4">n=4</button>
                    <button id="level-5">n=5</button>
                </div>
            </div>

            <div class="equation-display">
                <p id="current-equation">\\(h\\nu = E_f - E_i\\)</p>
                <p id="energy-calculation"></p>
                <p id="wavelength-calculation"></p>
            </div>
        </div>
      </div>

      <h3>Quantised Angular Momentum</h3>
      <p> Bohr also suggested that angular momentum was quantised...
      \\[
      L=mr^2\\omega = n\\hbar
      \\] which may seem like a completely random suggestion, and to be fair it was. However this random suggestion is 
      justified by the fact that the reduced Planck constant, \\(\\hbar\\), has the same dimensions as angular momentum. So
      it's worth a shot, right? </p>
      <p>Since the electron is rotating due to electric attraction, we can put the centrifugal force, \\(mr\\omega^2\\), equal
      to the Coulomb force, \\(\\frac{q_1 q_2}{4\\pi\\epsilon_0 r^2}=\\frac{e^2}{4\\pi\\epsilon_0 r^2}\\), to get:
      \\[
      mr\\omega^2 = \\frac{e^2}{4\\pi\\epsilon_0 m}, \\quad \\therefore \\quad r^3\\omega^2 = \\frac{e^2}{4\\pi\\epsilon_0 m},
      \\quad mr^2\\omega = n\\hbar\\quad \\therefore \\quad \\omega^2 = \\frac{n^2\\hbar^2}{m^2r^4}.
      \\]
      Then by smooshing the two equations we have together, we can get this:
      \\[
      r=n^2\\frac{\\hbar^24\\pi\\epsilon_0}{me^2} \\equiv n^2a_0
      \\]
      Now you may be thinking "Gqwquxbsjjr where the hell did \\(a_0\\) come from?!"</p>
      <p> Well that is what we call the Bohr radius, and is pretty much the atomic radius, \\(r\\), divided by \\(n^2\\). And
      since the Bohr radius is made up of constants, we can actually calculate a value:
      \\[
      a_0=\\frac{\\hbar^24\\pi\\epsilon_0}{me^2} = 0.53 Å
      \\]
      <p>So we’ve got our electron zipping around the nucleus in a nice circular orbit. 
      We already know from earlier that \\( r^3 \\omega^2 = e^2 / 4\\pi\\epsilon_0 m \\), which is basically 
      the universe’s way of saying, “Okay, this orbit is stable if you follow these rules.”</p>

      <p>Now, we can calculate the total energy, which is just kinetic energy plus potential energy:</p>

      <p>\\( E = KE + PE = \\frac{1}{2}mr^2\\omega^2 - \\frac{e^2}{4\\pi\\epsilon_0 r} \\)</p>

      <p>But wait! We can use that result from before to replace \\( r^2\\omega^2 \\) with something nicer. 
      Plug it in, and you get:</p>

      <p>\\( E = \\frac{1}{2} \\cdot \\frac{e^2}{4\\pi\\epsilon_0 r} - \\frac{e^2}{4\\pi\\epsilon_0 r} 
      = -\\frac{1}{2} \\cdot \\frac{e^2}{4\\pi\\epsilon_0 r} \\)</p>

      <p>Nice. So the total energy is negative — which makes sense. The electron is bound to the nucleus. It’s not 
      going anywhere unless you give it a shove.</p>

      <p>Now, here’s where things get spicy. Remember from earlier that \\( r = n^2 a_0 \\) with \\(a_0\\) being
      the Bohr radius? The formula implies radius depends on \\( n \\), the quantum number. So plug that in:</p>

      <p>\\( E_n = -\\frac{1}{2} \\cdot \\frac{e^2}{4\\pi\\epsilon_0} \\cdot \\frac{1}{n^2 a_0} = -\\frac{R}{n^2} \\)</p>

      <p>Where \\( R \\) is a constant. And not just any old constant, but apparently a quite important one, called the 
      <strong>Rydberg constant</strong>, and it turns out to be about 13.6 eV. If you did AQA physics at A-level (like me!!!),
      you might recognise this number from when we did the electron excitation line things. As you should, 'cus this is 
      <em>exactly</em> (ok, fine, not <em>eXaCtLy</em>, but you get the point...) the ionization energy of hydrogen. So 
      yes, this formula actually works.</p>

      <p>And that’s not just lucky. This a pretty <strong>sexy</strong> result. Because now we have a simple formula that explains 
      why hydrogen emits light at specific wavelengths — because electrons jump between energy levels, and the energy 
      difference is \\( \\Delta E = R(1/n_1^2 - 1/n_2^2) \\). And lo and behold — we get the Balmer series. The Rydberg 
      formula. All from a few assumptions.</p>

      <p>So far, so good. But we still haven't explained away the whole 'electrons spiralling into the nucleus and dying'
      situation. I mean, how could we? Electrons are particles, and all particles will release energy. There is really
      no way to work around that unless electrons stop being particles.</p>

      <p>Wait... de Broglie, what are you doing here?</p>

      <h3>de Broglie’s Hypothesis: Particles Are Waves</h3>

      <p>Right, mate, I'll be honest, yeah, when I said 'electrons stop being particles' I weren't being serious, it was
      rhetorical. </p>
      <p>Sorry, ignore my mate <em>de Broglie</em> (I think it's pronounced duh-BROY, I personally like to call him 
      'da broccoli'), silly bimp says that <strong>all particles</strong> behave like waves. Not just photons. But 
      <em>electrons</em>. And protons. And even you. And me. Flipping idiot...</p>
      <p>Oh, you're serious? Well then, explain to me smart arse. If I am a particle, why don't I diffract when I walk through
      a doorway?</p>
      <p>He said that every particle has a <strong>wavelength</strong>, given by:</p>
      <p>\\( \\lambda = \\frac{h}{p} \\quad \\text{or equivalently} \\quad p = \\frac{h}{\\lambda} = \\hbar k \\)</p>
      <p>This is now known as the <strong>de Broglie wavelength</strong>. And it’s not just a guess — it was 
      actually confirmed by experiment. Thomson (1925) showed that electrons diffract when they hit a crystal — 
      a wave-like behavior. So yes, electrons <em>are</em> waves. I bet you regret calling him a 'flipping idiot' and
      'smart arse' now, don't you? Can't believe <em>you'd</em> say all that...</p>

      <p>Now, here’s the genius part.</p>

      <p>Bohr said that angular momentum is quantized: \\( l = rp = n\\hbar \\).</p>

      <p>But why? Why does \\( p \\) have to be exactly \\( n\\hbar / r \\)?</p>

      <p>Well, if the electron is a wave, then for it to stay in a stable orbit, the wave must <strong>fit perfectly</strong> 
      around the ring. Like a standing wave. Imagine a wave going around a circle. If it doesn’t match up — if it’s out of 
      phase — it’ll interfere with itself and cancel out. Only if the circumference is an integer number of wavelengths will 
      the wave survive.</p>

      <p>So:</p>

      <p>\\( 2\\pi r = n\\lambda \\)</p>

      <p>But \\( \\lambda = h/p \\), so:</p>

      <p>\\( 2\\pi r = n \\cdot \\frac{h}{p} \\quad \\Rightarrow \\quad p = \\frac{nh}{2\\pi r} = \\frac{n\\hbar}{r} \\)</p>

      <p>Multiply both sides by \\( r \\):  
      \\( rp = n\\hbar \\)</p>

      <p>Which is <strong>exactly</strong> Bohr’s quantization condition!</p>

      <p>So de Broglie didn’t just suggest particles are waves — he gave us a <strong>reason</strong> why angular
      momentum is quantized. It’s not arbitrary. It’s because <strong>waves don’t like to make a mess</strong>.</p>

      <h3>When Do Quantum Effects Matter?</h3>

      <p>So now we know: particles have wavelengths. But when do those wavelengths matter?</p>

      <p>Let’s say you’ve got a gas. The average separation between particles is \\( l \\). The average wavelength 
      of each particle is \\( \\lambda_{\\text{th}} \\), the <strong>thermal de Broglie wavelength</strong>.</p>
      If \\( \\lambda_{\\text{th}} \\) is much smaller than \\( l \\), the particles don’t interact much — they 
      behave classically.</p>

      <p>But if \\( \\lambda_{\\text{th}} > l \\), then the waves start overlapping — interference happens — 
      and <strong>quantum effects kick in</strong>.</p>

      <p>The thermal de Broglie wavelength is roughly:</p>

      <p>\\( \\lambda_{\\text{th}} \\approx \\frac{h}{\\sqrt{3mk_B T}} \\)</p>

      <p>So when \\( k_B T < \\frac{\\hbar^2}{3ml^2} \\), the gas starts behaving like a quantum system.</p>

      <p>Which means:  
      - At low temperatures  
      - For light particles (like helium or electrons)  
      - In small spaces  </p>

      <p>Quantum effects become important. And that’s why, for example, superconductivity happens at low 
      temps — the electrons’ waves overlap and form Cooper pairs.</p>


      <div class="popup" id="emission spectra">
        <div class="popup-content">
          <button class="popup-close">&times;</button>
          <h4>Emission Spectrum Frequencies</h4>
          <p>
            These certain frequencies aren't random, though they may appear as such. For Hydrogen, the wavelengths are given by
            this formula:
            \\[
            \\frac1\\lambda=\\tilde{R}(\\frac1{m^2}-\\frac1{n^2}), \\quad m < n
            \\]
            where \\(\\tilde{R}\\) = 1.0968 ×10^7m−1 is the Rydberg constant, and m and n are integers. The value of m sorta
            describes which type of light we are dealing with:
              <ul>
                <li>For \\(m=1\\), we have the Lyman series, which is UV light</li>
                <li>For \\(m=2\\), we have the Balmer series, which has some visible light</li>
                <li>For \\(m=3\\), we have the Paschen series, which is infrared light</li>
              </ul>
          </p>
        </div>
        </div>
          <div class="popup" id="bohr energy">
          <div class="popup-content">
            <button class="popup-close">&times;</button>
            <h4>Emission Spectrum Frequencies</h4>
            <p>
              Using the formula given here, we can re-arrange it to get it in a similar form to the formula given in the 
              last little bit of information, simply by dividing by \\(hc\\):
              \\[
              \\frac1{\\lambda} = \\frac{E_f}{hc} - \\frac{E_i}{hc}=\\tilde{R}(\\frac1{m^2}-\\frac1{n^2})
              \\]
              By comparing the two formulas, we can see that they both consist of one term take away another term. If we
              assume that therefore each term in the first formula corresponds to each term in the second formula, we
              can infer:
              \\[
              \\frac{E_i}{hc}=-\\frac{\\tilde{R}}{m^2}, \\quad \\frac{E_f}{hc}=-\\frac{\\tilde{R}}{n^2}
              \\]
              Now you might think this is slightly degenerate maths and overall a bit of a half-assed way to do this. 
              After all, you can't just say \\(x-y=10, \\quad 15-5=10, \\quad\\therefore \\quad x=15 \\) and \\( y=5\\), 
              being as x could equal, I don't know, literally bloody anything. But don't worry. If you look down a 
              little bit, you'll see a section titled 'Quantised Angular Momentum,' which proves this to be the case a 
              bit more objectively.
              
            </p>
          </div>
        </div>
      `,
    },
  "quantum-mechanics": {
      title: "Quantum Mechanics",
      content: `
        
      <i>Jokey little intro </i>

      <h3>The wave function, \\(\\Psi(x,t)\\)</h3>
      <p>The wave function is a function which describe the quantum state of a particle. In other words, a function from 
      which you can get a particle's energy, momentum, and position. Each type of particle has its own wavefunction; think
      of it like a particle's username. They all have one unique to them.</p>
      <p> To give you a feel for what exactly we are dealing with, here are a few particles, with their usernames: </p>
      <p> Now you may wonder, what exactly is the wavefunction? After all, I can choose whatever nonesense I'd like to be my
      username, because it doesn't mean anything outside of whatever site I'm using. However, I'd like to assume particles are
      a bit more reasonable. And it's a function, it must measure something right? I know we can get energy, momentum, and 
      position <i>from</i> the wavefunction, but what exactly is it a function of? </p>
      <p> Simple answer... nobody knows. </p>
      <p> I'm serious, in trying to interpret this function, people have suggested everything from ... to literally creating
      new universes. </p>
      <p> And whilst I can't tell you what it is, I can try and tell you why no-one knows what it is, and it's a lot simpler
      than you might think. Below are the wavefunctions from before. Take a close hard look, and see if you can figure out
      what the problem is. </p>

      <p> Yep, the wavefunctions produce complex values. Now complex values are lovely mathematically, but pretty useless in
      real life. I mean, imagine you're waiting for someone, and you ask them how far away they are, and they say "I'm \\(2i\\)
      kilometres away." What can you do with that information? Nothing at all. And yet that's is what these particles are telling
      us, and they expect us to take 'em seriously? SMH... </p>
      <p> Anyway, since we humans can't do much with complex values, if we want to actually use the wavefunction, we will often
      take the square of the modulus, \\(|\\Psi (x,t)|^2=\\Psi (x,t)\\Psi^*(x,t)\\). Now we have something useable: a probability
      density! This tells us the probability of a particle being at position x at time t. </p>
      <p> Since we've got something to work with, let's work with it! Particles, being part of God's creation, do something we
      like to call existing. Existing is an important quality, because it means that, at any given time, the particle is
      somewhere doing something. Therefore, if we were to search through all of space, there is a 100% chance of finding the
      particle. Or in other words:
      \\[
      \\int^{\\infty}_{-\\infty}|\\Psi (x,t)|^2 dx = 1.
      \\]
      This is
      </p>
      <h3>Wave packets</h3>
      <p> We now know that particles are waves, and that they have a wavelength. However, this causes a problem.
      Waves are technically spread out infinitely over space. So if we were to look for a particle, we would have no idea
      where to look, because it could be anywhere. </p>
      <p> How do we solve this? Simple. Do you remember what we learnt about Fourier series? With enough waves to use and
      enough time to waste, we can combine any amount of sine waves with different wavelengths to form any shape we want. 
      With that in mind, we can try and make our wave look a bit more like a localised particle. </p>
      <p> To do this, we can take the wave-particle hybrid we want to know the position of, control+C it, and then
      control+VVVVVVVVV to get a lot of 'em. Then stretch and compress them slightly until they are all of different
      wavelengths.</p>
      <h3>Heisenberg's uncertainty principle</h3>
      <p> This is quite cool, so pay close attention. In classical mechanics, you can know with more or less absolute certainty
      where something is and how quickly it's moving. I mean, after all, you can... see it, right? Take this ball over here </p>
      <p>If you ask me, it's pretty obvious that the ball is in position a, and that the ball is not in position b, right?
      Right. </p>
      <p>And you obviously can't tell from here, 'cus it's a still image, but irl you could probably get a sense for how
      quickly or slowly the ball was moving. </p>
      <p>However, try doing that with a quantum particle, and you no longer have the same level of certainty you did before.
      No matter how hard you try, there will always be some uncertainty. This leads to what we call the Heisenberg 
      uncertainty principle. We can only know the position and momentum of a quantum object, with uncertainties which
      satisfy:
      \\[
      \\Delta x \\Delta p \\geq \\frac{\\hbar}2
      \\] 
      Now just to let you in on a little secret: this formula here is often labelled as "Heisenberg's uncertainty principle."
      However, Heisenberg didn't actually come up with the formula at all, not in the aforementioned format anyway.
      Heisenberg figured out that there was some sort of foundational uncertainty, although he was only able to get
      something along the lines of \\(\\Delta x \\Delta p \\geq \\text{probably some factor of } \\hbar\\). As for the
      complete form, that was actually derived be some other guys who came later.</p>
      <p> But wait!! You may be wondering, "We can't measure things with a better resolution than h-bar over two? Ain't that
      a bit useless as information? I mean, rulers and speedometres don't have that resolution anyway... nothing does!" </p>
      <p> And you're right, we as fallen human beings cannot measure anything to that level of accuracy. But what makes
      this so interesting is that, unlike measuring length or mass, where the accuracy of the measurement is entirely
      dependent on the resolution of the measuring device, quantum particles are fundamentally ambiguous. What do I mean?
      Say we have an object, which we put on a scale. The scale gives us a reading of 2.00kg. We know that in reality, the
      object could weigh anything between 1.995kg and 2.005kg. More importantly, while we don't know exactly what it weighs,
      we know that is weighs something between these values. Now imagine that, instead of weighing something between those two
      values, it actually weighs the entire range of values at the same time. </p>
      <p>What? Something which is fundamentally flawed? How does that work?</p>
      <p>You know me, I'm all for giving intuitive explainations. I'm not sure if this is exactly how it works, but it will
      at least give you something to work with. </p>
      <p>Let's focus on the wave aspects of quantum objects. Let's even go so far as to sacriligeously suggest that
      quantum objects are just waves. Also remember that the wavelength of a quantum particle is linked to it's momentum.</p>
      <p>Now take this wave here</p>
      <p>Now, please tell me the momentum and the position of the wave</p>
      <p>Ok, well, we know that the momentum of a particle can be calculated by \\(p = \\frac{h}{\\lambda}\\) which is
      6.34e-34 divided by 300 nanometres which is... As for it's position... erm... well it could be anywhere along
      this line. </p>
      <p>Right so in this case, we are certain of it's momentum, but have no clue of it's position. Or in mathmaticianese,
      \\(\\Delta p = 0\\), but \\(\\Delta x = \\infty\\). </p>
      <p> So now how do we get a position? Well, if you remember from the Fourier series section, we can form any shape
      from a combination of sine waves of different wavelength. This is a sine wave, so let's try and change the sine wave
      from something like this:<p/>
      <p> To something more like this:</p>
      <p> This is a combination of basically infinite sine waves, each being slightly longer then the former. And now I know
      where it is. I mean, it's right there innit? </p>
      <p> BUT! Now we don't know it's momentum now! </p>
      <h3>The Schrödinger equation</h3>
      <p> We've done some pretty interesting stuff so far. But some people weren't convinced. According to sources,
      when Schrödinger was at a conference talking about the da broccoli hypothesis, one of his colleagues, Debye,
      was a bit skeptical. Then again, his reasoning was quite sensible (unlike you who just called de Broglie a 
      flipping idiot, I just can't believe <em>you</em> said that...). </p>
      <p> Debye's logic was as follows: If all particles can exhibit wave-like properties, then we should be able to
      derive a wave equation for all particles. By now we know of the regular wave equation, which is:
      \\[
      \\frac{\\partial^2 U}{\\partial x^2}=\\frac1{v^2}\\frac{\\partial^2 U}{\\partial t^2}
      \\]
      (And if you don't, then you need to come <a href="http://127.0.0.1:5500/topic.html?topic=waves">here!</a>)
      We need something like this for everything else. And that's exactly what Schrödinger did, forming his well-known
      Schrödinger equation! </p>
      <p> Now, normally, I wouldn't bother deriving the full equation here, and I'd just put it in the
      little orange links. But this derivation is really cool (if you can follow it), so I'm gonna put
      it here anyway. And if you don't care, you can probably just ignore it tbh. Anyway, here goes...</p>
      <p> To start, recall that every object has a de Broglie wavelength, given by \\(\\lambda = \\frac{h}{p}\\).
      More importantly, each object only has one wavelength, which means we can represent them as right-moving
      waves, given by:
      \\[
      \\Psi(x,t)=Ae^{i(kx-\\omega t)}
      \\]
      We could also consider left-moving waves (which is the same formula, but with \\(-k\\) instead), but
      it is probably easier to just think of \\(k\\) as a vector \\(\\mathbf{k}\\), with positive
      \\(\\mathbf{k}\\) moving to the right and negative \\(\\mathbf{k}\\) moving to the left. </p>
      <p> Now we can differentiate this function with respect to x and t:
      \\[
      \\frac{\\partial^2 \\Psi}{\\partial x^2} = (ik)^2 Ae^{i(kx-\\omega t)} = -k^2\\Psi
      \\]
      \\[
      \\frac{\\partial \\Psi}{\\partial t} = -i \\omega Ae^{i(kx-\\omega t)} = -i\\omega\\Psi
      \\]
      <p> If we multiply the first equation by -1 and the second equation by \\(i\\), we can end up with
      two very important and completely serious formulae:
      \\[
      k^2\\Psi \\text{ can PROBABLY be replaced with } -\\frac{\\partial^2 \\Psi}{\\partial x^2}, \\quad
      \\omega\\Psi \\text{ can PROBABLY be replaced with } i\\frac{\\partial \\Psi}{\\partial t}
      \\]
      Very legit formulae, I know. </p>
      <p> Jokes aside, the reason why I used 'can PROBABLY be replaced with' as opposed to 'is equal to' is
      because, well, we don't actually know. So far, our only reason for doing this is... well why not? It
      seems to work, so let's just give it a go! </p>
      <p> Oh, and why do we need values for \\(k^2\\Psi\\) and \\(\\omega\\Psi\\)? Well, going back to classical
      mechanics, we know that the total energy of a particle is given by: 
      \\[
      E = \\frac{p^2}{2m}
      \\]
      Thanks to de Broglie, we know that \\(p = \\hbar k\\). And thanks to Planck, we know that \\(E = \\hbar \\omega\\).
      So we can substitute these values in to get:
      \\[
      \\hbar \\omega = \\frac{\\hbar^2 k^2}{2m} , \\therefore \\hbar \\omega - \\frac{\\hbar^2 k^2}{2m} = 0
      \\]
      We can then multiply this equation by \\(\\Psi\\) because... why not? It helps our cause I guess... and then we
      use the two 'can PROBABLY be replaced with' formulae to get:
      \\[
      i\\hbar\\frac{\\partial \\Psi}{\\partial t}=  -\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi}{\\partial t^2}
      \\]
      And we've got it! The Schrödinger equation! </p>
      `,
    },
  "use-equation": {
      title: "How to solve the Schrödinger equation",
      content: `
        
      <i>Jokey little intro </i>

      <p> So far, we have learnt about the origins of Quantum mechanics, and even gotten ourselves some new equations, the
      most notable being the iconic Schrödinger equation:
      \\[
      i\\hbar\\frac{\\partial \\Psi}{\\partial t}=  -\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi}{\\partial t^2}
      \\]
      But... how exactly do we use this?
      </p>
      <h3>Potential & The TISE-on Fury equation</h3>
      <p> Before we get into it, let's give the Schrödinger equation a teensy upgrade:
      \\[
      i\\hbar\\frac{\\partial \\Psi}{\\partial t}=  -\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi}{\\partial t^2} + V\\Psi
      \\]
      Ooh, our equation now has a little 'V' now! But why? </p>

      <p>Well, by doing some maths, we can see that the first term is total energy, and the second term is kinetic energy.</p>

      <p>Next, let me explain the concept of stationary states.</p>

      <p>The wavefunction is, surprise surprise, a function. More importantly, it is a function of both distance and time.
      This means that the probability of finding the particle in a given place changes over time. Think of it you being
      stood in the middle of a ginormous, field, and you're playing hide and seek with some kid.</p>

      <p>At first, the probability of the kid being outside a certain radius is next to nothing, because they can't run fast
      enough to get there in time. However, give it like a minute, and the odds of them being there increases.</p>

      <p>Now a stationary state, imagine we impose a rule, that once you hide, you can't move.</p>

      <p>So does that mean a stationary state is when the particle can't move? Well... no. </p>

      <p>A stationary state doesn't mean that the particle is physically stationary. I mean, after all the kid can still move.
      However, you know this kid so well, that you know that even with that in mind, the likelihood of the kid being in any 
      particular place remains constant.</p>

      <p>This is the same for quantum particles. A particle (say, a proton) has this probability distribution. If the
      distribution doesn't change over time, then the particle is in a stationary state (even though the proton may actually
      be moving).</p>

      <p>This is cool, but let's think about it mathematically

      <p> If our wavefunction is supposed to be in a stationary
      \\[
      e^{-i\\omega t}=e^{\\frac{-iEt}{\\hbar}}
      \\]
      </p>
      <h3>Steps to solving the TISE-on Fury equation</h3>
      <h3>Example! Infinite potential well</h3>
      <h3>Another Example! Potential Step</h3>
      <h3>Another Egg Sample! Infinite Potential Well</h3>

      `,
    },
  "quantumI-summary": {
      title: "The numbers don't lie...",
      content: `
        
      <i>Fun fact, if you've ever wondered how I got the idea to create this website, in preparation for my Quantum Phenomena
      exam, I made the summary sheets that I have at the end of each topic for both Quantum I & II. I then put it in my 
      physics tutorial group chat, and after the typical "Oh my goodness, these are sooooooo good!!!" one guy suggested me
      giving them to the department, to which I said, no, 'cus I ain't tryna raise no grade boundaries. Then another guy
      said, you could sell them, to which i said, ":o", and he then suggested I make a website. And here we are!!! </i>

      <h2>Summary to Quantum Phenomena</h2>

        <p>And there you have it! We're done! Hopefully that wasn't too bad! </p>
        <p> Quantum physics in a nutshell is complete nonsense, which takes place only because mathematically it can. </p>
        

        
        <p>As promised, here is your special summary image!</p>
        <img src="images/Quantum cheat sheet.jpg" alt="Quantum I Summary" style="max-width: 30%; border-radius: 20px;" />
      
        <p> And here is your special download link!! <a href="images/Quantum cheat sheet.jpg" download>
              ⬇ Download this diagram
          </a> </p>

      `,
    },

  // Subtopics for Quantum II
  "quantumII-intro": {
    title: "Physics is still bare weird y'know...",
    content: `
    `
  },
  "fundamental": {
    title: "Fundamental Particles and Forces",
    content: `
      <h3>Particle Physics: When You Realise Everything Is Made of Stuff You Can’t See</h3>

      <p>Right. Let’s talk about <strong>particle physics</strong>.</p>

      <p>No, not the kind where you split atoms. We’re talking about <strong>what everything is made of</strong> — and why you’re basically just a walking bag of quarks, leptons, and a whole lot of empty space.</p>

      <p>And yes — your mass isn’t from protons and neutrons. It’s from the energy of the gluons holding them together.</p>

      <p>But we’ll get to that.</p>

      <h3>Relativistic Energy: When Mass Is Just a Form of Energy</h3>

      <p>Remember Einstein’s famous equation?</p>

      <p>\\( E = mc^2 \\)</p>

      <p>It’s not the full story.</p>

      <p>The full version is:</p>

      <p>\\( E^2 = (pc)^2 + (mc^2)^2 \\)</p>

      <p>Where:</p>
      <ul>
        <li>\\( E \\) = total energy</li>
        <li>\\( p \\) = momentum</li>
        <li>\\( m \\) = rest mass</li>
      </ul>

      <p>If the particle is at rest (\\( p = 0 \\))? Then \\( E = mc^2 \\).</p>

      <p>If it’s massless (\\( m = 0 \\))? Then \\( E = pc \\) — like for photons.</p>

      <h3>Mass in Natural Units: When c = 1 and eV = Mass</h3>

      <p>In particle physics, we’re lazy. So we set \\( c = 1 \\), and measure mass in energy units.</p>

      <p>Example: proton mass = 938 MeV/c².</p>

      <p>But since \\( c = 1 \\), we just say “938 MeV” and everyone knows we mean mass.</p>

      <p>To convert back to kg?</p>

      <p>\\( m = \\frac{938 \\times 10^6 \\times 1.602 \\times 10^{-19}}{(3 \\times 10^8)^2} = 1.67 \\times 10^{-27} \\, \\text{kg} \\)</p>

      <p>But honestly? Nobody does that. We stick with MeV.</p>

      <h3>The Standard Model: The Periodic Table of Fundamental Particles</h3>

      <p>Everything in the universe is made from a few fundamental particles — and they come in two types:</p>

      <ul>
        <li><strong>Fermions</strong>: the stuff that makes matter (like you)</li>
        <li><strong>Bosons</strong>: the stuff that carries forces (like photons)</li>
      </ul>

      <p>And yes — you’re made of fermions. The forces you feel are carried by bosons.</p>

      <h3>Fermions: The Matter Particles</h3>

      <p>Fermions have half-integer spin: \\( \\frac{1}{2}\\hbar, \\frac{3}{2}\\hbar, \\ldots \\)</p>

      <p>They come in two flavours:</p>

      <h4>Leptons</h4>
      <ul>
        <li>Electron (\\( e^- \\)), muon (\\( \\mu^- \\)), tau (\\( \\tau^- \\)) — all charged</li>
        <li>Neutrinos (\\( \\nu_e, \\nu_\\mu, \\nu_\\tau \\)) — neutral, very light</li>
      </ul>

      <p>Each has a corresponding antiparticle (e.g. \\( e^+ \\)).</p>

      <p>And each carries a “family” lepton number: \\( L_e, L_\\mu, L_\\tau \\).</p>

      <p>And yes — lepton number is conserved. For now.</p>

      <h4>Quarks</h4>
      <ul>
        <li>Up, down</li>
        <li>Charm, strange</li>
        <li>Top, bottom</li>
      </ul>

      <p>They make up protons and neutrons. But you never see them alone — they’re always confined.</p>

      <p>And they carry three types of charge:</p>
      <ul>
        <li><strong>Electric charge</strong>: up = +2/3, down = -1/3</li>
        <li><strong>Weak isospin</strong>: couples to W and Z bosons</li>
        <li><strong>Colour charge</strong>: red, green, blue — the source of the strong force</li>
      </ul>

      <h3>Bosons: The Force Carriers</h3>

      <p>Bosons have integer spin: \\( 0\\hbar, 1\\hbar, 2\\hbar, \\ldots \\)</p>

      <p>They mediate the forces:</p>

      <ul>
        <li><strong>Photon (\\( \\gamma \\))</strong>: electromagnetic force — infinite range</li>
        <li><strong>W±, Z⁰ bosons</strong>: weak force — short range (~10⁻¹⁸ m)</li>
        <li><strong>Gluons</strong>: strong force — binds quarks, range ~10⁻¹⁵ m</li>
        <li><strong>Higgs boson</strong>: gives mass to fundamental particles</li>
      </ul>

      <p>And yes — the weak force is “weak” because it’s short-ranged, not because it’s feeble.</p>

      <h3>Hadrons: When Quarks Get Together</h3>

      <p>Quarks don’t exist alone. They form composite particles called <strong>hadrons</strong>.</p>

      <p>Two types:</p>

      <h4>Mesons</h4>
      <ul>
        <li>Quark + antiquark (\\( q\\bar{q} \\))</li>
        <li>Colour-neutral (e.g. red + antired)</li>
        <li>Examples: \\( K^+ = u\\bar{s} \\), \\( D^0 = c\\bar{u} \\), \\( B^- = b\\bar{u} \\)</li>
      </ul>

      <h4>Baryons</h4>
      <ul>
        <li>Three quarks (\\( qqq \\)) — one red, one green, one blue → colourless</li>
        <li>Examples: proton = \\( uud \\), neutron = \\( udd \\)</li>
      </ul>

      <p>There are also exotic hadrons — like tetraquarks and pentaquarks — but they’re rare and unstable.</p>

      <h3>Conservation Laws: The Rules of the Game</h3>

      <p>In any particle reaction, certain quantities must be conserved:</p>

      <ul>
        <li><strong>Electric charge</strong>: total before = total after</li>
        <li><strong>Baryon number (B)</strong>: baryons = +1, antibaryons = -1</li>
        <li><strong>Lepton number (L)</strong>: leptons = +1, antileptons = -1</li>
        <li><strong>Colour</strong>: all observed particles are colourless</li>
      </ul>

      <p>Example: Is this reaction possible?</p>

      <p>\\( \\pi^- (d\\bar{u}) + p (uud) \\to \\pi^0 (u\\bar{u}) + n (udd) + \\pi^- (d\\bar{u}) + \\pi^+ (u\\bar{d}) \\)</p>

      <p>Check charge: -1 + 1 = 0 + 0 -1 + 1 → 0 = 0 ✓</p>
      <p>Baryon number: 0 + 1 = 0 + 1 + 0 + 0 → 1 = 1 ✓</p>
      <p>Lepton number: 0 = 0 ✓</p>
      <p>Colour: all colourless ✓</p>

      <p>So yes — it’s allowed.</p>

      <p>But this one?</p>

      <p>\\( \\nu_\\mu + p \\to \\mu^+ + n \\)</p>

      <p>Lepton number: \\( L_\\mu = +1 + 0 = +1 \\), but final: \\( L_\\mu = -1 + 0 = -1 \\) → not conserved.</p>

      <p>So no. It’s forbidden.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>\\( E^2 = (pc)^2 + (mc^2)^2 \\)</li>
        <li>Mass in MeV/c² — but we just say MeV</li>
        <li>Fermions: matter (leptons, quarks)</li>
        <li>Bosons: force carriers (photon, W/Z, gluons, Higgs)</li>
        <li>Quarks have colour, electric, and weak charge</li>
        <li>Hadrons: mesons (\\( q\\bar{q} \\)), baryons (\\( qqq \\))</li>
        <li>Conserved: charge, baryon number, lepton number, colour</li>
      </ul>

      <p>And remember: the universe doesn’t care how many particles you know.  
      It only cares about the conservation laws.</p>
    `
  },
  "feynman-diagrams": {
    title: "Feynman Diagrams",
    content: `
      <h3>Feynman Diagrams: How to Draw the Invisible (And Not Look Stupid)</h3>

      <p>Right. Let’s talk about <strong>Feynman diagrams</strong>.</p>

      <p>No, not the kind you doodle in the margin. We’re talking about <strong>pictures that describe how particles interact</strong> — like a comic strip for quantum physics.</p>

      <p>And yes — they’re not just art. They’re math. And they’re powerful.</p>

      <h3>What Is a Feynman Diagram?</h3>

      <p>A Feynman diagram is a cartoon of a particle interaction.</p>

      <p>It shows:</p>
      <ul>
        <li><strong>What goes in</strong> (initial state)</li>
        <li><strong>What comes out</strong> (final state)</li>
        <li><strong>What happens in between</strong> (the interaction)</li>
      </ul>

      <p>But here’s the kicker: <strong>you can’t see what happens in the middle</strong>.</p>

      <p>It’s like watching two people walk into a dark room, then two people walk out. You don’t know what happened in there — but you can guess.</p>

      <h3>The Rules of the Game</h3>

      <p>Every diagram has:</p>
      <ul>
        <li><strong>External lines</strong>: incoming and outgoing particles — the ones you can measure</li>
        <li><strong>Internal lines</strong>: particles that exist only during the interaction — like the photon in electron scattering</li>
        <li><strong>Vertices</strong>: points where particles meet and interact</li>
      </ul>

      <p>Time usually goes left to right. But some people draw it top to bottom. Either way — pick one and stick with it.</p>

      <h3>Example: Electron-Electron Scattering</h3>

      <p>Two electrons approach. They don’t touch. But they exchange a photon — a virtual photon.</p>

      <p>That photon carries the electromagnetic force.</p>

      <p>The diagram looks like this:</p>

      <ul>
        <li>Two electron lines coming in</li>
        <li>A wavy photon line connecting them</li>
        <li>Two electron lines going out</li>
      </ul>

      <p>Simple. But it represents a full quantum field theory calculation.</p>

      <h3>Virtual Particles: The Ones That Break the Rules (But Only Briefly)</h3>

      <p>The photon in that diagram? It’s <strong>virtual</strong>.</p>

      <p>Which means: it doesn’t obey \\( E^2 = p^2 c^2 + m^2 c^4 \\).</p>

      <p>It can have “wrong” energy. “Wrong” momentum. It’s basically cheating.</p>

      <p>But only for a short time — thanks to the uncertainty principle:</p>

      <p>\\( \\Delta E \\Delta t \\approx \\hbar \\)</p>

      <p>So the more it violates energy conservation, the shorter it can exist.</p>

      <p>That’s why virtual particles are <strong>unobservable</strong>. You can’t measure them. You can only infer them.</p>

      <h3>Time Order Matters (Or Doesn’t)</h3>

      <p>Sometimes, the order of vertices matters. Sometimes, it doesn’t.</p>

      <p>For electron-electron scattering, there are two possible time orderings:</p>
      <ol>
        <li>Electron 1 emits photon → electron 2 absorbs it</li>
        <li>Electron 2 emits photon → electron 1 absorbs it</li>
      </ol>

      <p>Both are valid. So we draw a diagram with a vertical internal line — meaning “both happen.”</p>

      <p>Quantum mechanics: always the drama.</p>

      <h3>The Three Forces: EM, Weak, and Strong</h3>

      <p>We’re focusing on three of the four forces. Gravity? Too weak. Not relevant here.</p>

      <h4>Electromagnetic Force</h4>
      <ul>
        <li>Carrier: photon (\\( \\gamma \\))</li>
        <li>Acts on: anything with electric charge</li>
        <li>Range: infinite</li>
        <li>Strength: \\( \\alpha = 1/137 \\)</li>
      </ul>

      <p>It’s responsible for atoms, chemistry, light, and your phone not falling through the table.</p>

      <h4>Weak Force</h4>
      <ul>
        <li>Carriers: \\( W^\\pm \\), \\( Z^0 \\) bosons</li>
        <li>Massive: \\( W \\approx 80 \\, \\text{GeV}/c^2 \\), \\( Z \\approx 91 \\, \\text{GeV}/c^2 \\)</li>
        <li>Range: ~10⁻¹⁸ m — super short</li>
        <li>Responsible for: beta decay, neutrino interactions, flavour changes</li>
      </ul>

      <p>Example: \\( \\tau^- \\to \\mu^- + \\bar{\\nu}_\\mu + \\nu_\\tau \\)</p>

      <p>Here, a \\( \\tau^- \\) turns into a \\( \\nu_\\tau \\) and a \\( W^- \\), which then decays to \\( \\mu^- \\) and \\( \\bar{\\nu}_\\mu \\).</p>

      <h4>Charged vs Neutral Current</h4>

      <p><strong>Charged current</strong>: involves \\( W^\\pm \\) → changes particle flavour (e.g. \\( s \\to u \\))</p>

      <p><strong>Neutral current</strong>: involves \\( Z^0 \\) → no flavour change, just momentum transfer</p>

      <p>Example: \\( \\nu_\\mu + e^- \\to \\nu_\\mu + e^- \\) — elastic scattering via \\( Z^0 \\)</p>

      <h4>Strong Force</h4>
      <ul>
        <li>Carrier: gluon (\\( g \\))</li>
        <li>Acts on: anything with colour charge (quarks and gluons)</li>
        <li>Range: ~10⁻¹⁵ m — about the size of a proton</li>
        <li>Unique property: gluons themselves carry colour → they interact with each other</li>
      </ul>

      <p>This leads to **confinement** — you never see free quarks or gluons.</p>

      <p>And **asymptotic freedom** — at very short distances, the strong force gets weaker.</p>

      <h3>Example: Kaon Decay</h3>

      <p>Consider \\( K^+ (u\\bar{s}) \\to \\pi^+ (u\\bar{d}) + \\pi^0 (u\\bar{u}) \\)</p>

      <p>The \\( u \\) quark is a spectator. The real action is \\( \\bar{s} \\to \\bar{u} + W^+ \\), then \\( W^+ \\to \\bar{d} + u \\)</p>

      <p>So it’s a charged weak interaction — because flavour changes, and \\( W^+ \\) is involved.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Feynman diagrams: cartoons of particle interactions</li>
        <li>External lines: real, measurable particles</li>
        <li>Internal lines: virtual particles (unobservable)</li>
        <li>Vertices: interaction points</li>
        <li>Virtual particles: break energy-momentum conservation briefly</li>
        <li>EM force: photon, infinite range</li>
        <li>Weak force: \\( W^\\pm, Z^0 \\), short range, changes flavour</li>
        <li>Strong force: gluons, colour charge, confinement</li>
        <li>Charged current: \\( W^\\pm \\), flavour change</li>
        <li>Neutral current: \\( Z^0 \\), no flavour change</li>
      </ul>

      <p>And remember: the universe doesn’t care how messy your diagram is.  
      It only cares about the conservation laws.</p>
    `
  },
  "symmetries": {
    title: "Symmetries",
    content: `
      <h3>Symmetries and Conservation Laws: When the Universe Says “Nothing Changes”</h3>

      <p>Right. Let’s talk about <strong>symmetries</strong>.</p>

      <p>No, not the kind where your face is perfectly balanced. We’re talking about <strong>how the laws of physics stay the same no matter where, when, or how you look at them</strong>.</p>

      <p>And yes — this isn’t just philosophy. It’s the foundation of all modern physics.</p>

      <h3>What Is a Symmetry?</h3>

      <p>A symmetry is an operation that you can do to a system without changing its physics.</p>

      <p>Rotate it? Shift it in space? Flip time? If the laws stay the same, you’ve got a symmetry.</p>

      <p>Example: do an experiment today. Do it tomorrow. Same result? That’s <strong>time translation symmetry</strong>.</p>

      <p>Move it to the left? Still works? That’s <strong>spatial translation symmetry</strong>.</p>

      <p>And thanks to <strong>Noether’s Theorem</strong>, every continuous symmetry gives you a <strong>conserved quantity</strong>.</p>

      <p>Yes — <em>Emmy Noether</em> dropped one of the biggest bombs in physics history and most people don’t even know her name.</p>

      <h3>Continuous Symmetries: The Big Three</h3>

      <ul>
        <li><strong>Time translation</strong> → energy is conserved</li>
        <li><strong>Spatial translation</strong> → linear momentum is conserved</li>
        <li><strong>Rotation</strong> → angular momentum is conserved</li>
      </ul>

      <p>So yes — conservation laws aren’t random. They’re baked into the fabric of spacetime.</p>

      <h3>Internal Symmetries: When the Universe Doesn’t Care About Labels</h3>

      <p>These aren’t about space or time. They’re about the properties of particles.</p>

      <ul>
        <li><strong>Electroweak charge</strong>: physics is the same for up and down quarks → conservation of charge</li>
        <li><strong>Colour symmetry</strong>: physics is the same for red, green, blue quarks → conservation of colour</li>
      </ul>

      <p>These are <strong>gauge symmetries</strong> — and they’re why the strong and electromagnetic forces exist.</p>

      <h3>Discrete Symmetries: The Mirror, the Twin, and the Rewind Button</h3>

      <p>These aren’t smooth. They’re sudden flips.</p>

      <h4>Parity (P)</h4>
      <p>Flip all spatial coordinates: \\( \\vec{r} \\to -\\vec{r} \\).</p>
      <p>Like looking in a mirror.</p>
      <p>Electromagnetism and strong force? Respect it.</p>
      <p>Weak force? <strong>Violates it</strong>. In the 1950s, this blew everyone’s mind.</p>

      <h4>Charge Conjugation (C)</h4>
      <p>Swap particles with antiparticles.</p>
      <p>Weak force? Also violates this.</p>

      <h4>Time Reversal (T)</h4>
      <p>Run time backwards.</p>
      <p>Weak force? Violates this too.</p>

      <h3>The Ultimate Symmetry: CPT</h3>

      <p>Now here’s the kicker:</p>

      <p>Even though the weak force breaks C, P, T, and even CP —</p>

      <p>It <strong>never</strong> breaks <strong>CPT</strong>.</p>

      <p>If you:</p>
      <ol>
        <li>Flip space (P)</li>
        <li>Swap particles with antiparticles (C)</li>
        <li>Run time backwards (T)</li>
      </ol>

      <p>Then the universe looks exactly the same.</p>

      <p>This is a fundamental requirement of quantum field theory. No exceptions.</p>

      <p>So yes — the weak force is a rebel. But even rebels have rules.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Symmetry → conserved quantity (Noether’s Theorem)</li>
        <li>Time symmetry → energy conserved</li>
        <li>Space symmetry → momentum conserved</li>
        <li>Rotation → angular momentum conserved</li>
        <li>P, C, T: discrete symmetries</li>
        <li>Weak force violates P, C, T, and CP</li>
        <li>But <strong>CPT is always conserved</strong></li>
      </ul>

      <p>And remember: the universe doesn’t care about your intuition.  
      It only cares about symmetry.</p>
    `
  },
  "probing": {
    title: "Physics Probing",
    content: `
      <h3>Particle Decays and Relativistic Kinematics: When Things Fall Apart (At Nearly the Speed of Light)</h3>

      <p>Right. Let’s talk about <strong>particle decays</strong>.</p>

      <p>No, not the kind that smell bad. We’re talking about <strong>unstable particles turning into other particles</strong> — because nothing lasts forever, especially in particle physics.</p>

      <p>And yes — we need relativity. Because these things are moving so fast, Newton’s laws are useless.</p>

      <h3>Particle Decays: When a Particle Can’t Hold Itself Together</h3>

      <p>Some particles are unstable. They decay into lighter particles.</p>

      <p>Example: muon decay:</p>

      <p>\\( \\mu^- \\to e^- + \\bar{\\nu}_e + \\nu_\\mu \\)</p>

      <p>Conserved: charge, lepton numbers \\( L_e, L_\\mu \\).</p>

      <p>Not conserved: mass. The muon is heavier than the electron — the extra energy goes into kinetic energy of the products.</p>

      <h3>Rest Frame vs Lab Frame</h3>

      <p>In the **rest frame** of the decaying particle, total momentum is zero.</p>

      <p>So the decay products fly out back-to-back.</p>

      <p>In the **lab frame**, the parent particle might be moving — so the decay products are boosted in that direction.</p>

      <p>This matters for detectors — the decay products aren’t isotropic.</p>

      <h3>Relativistic Invariants: The Numbers That Never Change</h3>

      <p>In relativity, energy and momentum change with frame.</p>

      <p>But some things don’t.</p>

      <p>The most important is the **invariant mass**:</p>

      <p>\\( s = (E_1 + E_2)^2 - (\\vec{p}_1 + \\vec{p}_2)^2 c^2 \\)</p>

      <p>For a single particle, \\( s = m^2 c^4 \\).</p>

      <p>For a system, \\( \\sqrt{s} \\) is the total energy in the centre-of-mass frame.</p>

      <p>This is what colliders like the LHC quote — “\\( \\sqrt{s} = 13 \\, \\text{TeV} \\)” means the COM energy is 13 TeV.</p>

      <h3>Centre-of-Mass (COM) Frame: Where Physics Is Simple</h3>

      <p>In the COM frame, total momentum is zero:</p>

      <p>\\( \\sum \\vec{p}_{\\text{initial}} = 0 \\)</p>

      <p>So for two colliding particles:</p>

      <p>\\( \\vec{p}_1 = -\\vec{p}_2 \\)</p>

      <p>This is the natural frame for studying collisions — because symmetry makes the maths easier.</p>

      <h3>Two-Body Decay: Energy and Momentum Sharing</h3>

      <p>When a particle of mass \\( M \\) decays into two particles of masses \\( m_1 \\) and \\( m_2 \\), their energies in the rest frame are:</p>

      <p>\\( E_1 = \\frac{M^2 + m_1^2 - m_2^2}{2M} c^2 \\)</p>

      <p>\\( E_2 = \\frac{M^2 + m_2^2 - m_1^2}{2M} c^2 \\)</p>

      <p>And their momenta are equal and opposite.</p>

      <p>Useful for calculating what detectors see.</p>

      <h3>Cosmic Ray Example</h3>

      <p>A high-energy proton hits the atmosphere → creates pions.</p>

      <p>Charged pions decay: \\( \\pi^\\pm \\to \\mu^\\pm + \\nu_\\mu \\) or \\( \\bar{\\nu}_\\mu \\)</p>

      <p>Then muons decay: \\( \\mu^- \\to e^- + \\bar{\\nu}_e + \\nu_\\mu \\)</p>

      <p>But muons live longer when they’re moving fast — thanks to time dilation.</p>

      <p>So they reach the ground. Otherwise, they’d decay in the upper atmosphere.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Unstable particles decay to lighter ones</li>
        <li>Conserved: energy, momentum, charge, lepton/baryon number</li>
        <li>Rest frame: decay products back-to-back</li>
        <li>\\( s = (\\sum E)^2 - (\\sum \\vec{p})^2 c^2 \\) = invariant mass squared</li>
        <li>\\( \\sqrt{s} \\) = COM energy</li>
        <li>COM frame: total \\( \\vec{p} = 0 \\)</li>
        <li>Two-body decay: energies fixed by kinematics</li>
        <li>Time dilation lets cosmic muons reach Earth</li>
      </ul>

      <p>And remember: the universe doesn’t care how short your lifetime is.  
      It only cares about the reference frame.</p>
    `
  },
  "sources": {
    title: "Sources of Particles",
    content: `
      <h3>Sources of Particles: When the Universe Floods You With Stuff You Didn’t Ask For</h3>

      <p>Right. Let’s talk about <strong>where particles come from</strong>.</p>

      <p>No, not the kind that appear in your kitchen at 3am. We’re talking about <strong>natural sources of high-energy particles</strong> — the ones that rain down on Earth from space, burst out of the Sun, or seep up from the radioactive core of the planet.</p>

      <p>And yes — you’re being bombarded. Right now.</p>

      <h3>β⁻ Decay: When Neutrons Have a Midlife Crisis</h3>

      <p>Inside unstable atomic nuclei, neutrons can’t keep it together.</p>

      <p>So they decay:</p>

      <p>\\( n \\to p + e^- + \\bar{\\nu}_e \\)</p>

      <p>This is <strong>beta-minus decay</strong> — and it’s everywhere.</p>

      <p>In rocks. In bananas. In your bones (thanks, potassium-40).</p>

      <p>And the antineutrinos it produces? They’re called <strong>geoneutrinos</strong> when they come from Earth’s core.</p>

      <p>We can’t drill to the centre of the Earth. But we *can* detect these ghostly particles — and use them to probe how much radioactive material is down there.</p>

      <p>And yes — β⁻ decay is responsible for about <strong>half of Earth’s internal heat</strong>. The other half is leftover from when the planet formed.</p>

      <p>So your GPS works because of radioactive decay. No big deal.</p>

      <h3>Cosmic Ray Air Showers: When a Single Proton Makes a Whole Cascade</h3>

      <p>High-energy protons — mostly from supernovae or active galaxies — slam into the top of the atmosphere at nearly the speed of light.</p>

      <p>They hit a nitrogen or oxygen nucleus. Boom.</p>

      <p>That collision creates pions, kaons, more protons, neutrons — a whole shower of particles.</p>

      <p>Those decay or collide again. More particles. More energy.</p>

      <p>By the time it reaches the ground, you’ve got a **particle avalanche** — millions of secondary particles spread over kilometers.</p>

      <p>And the muons? They’re the survivors.</p>

      <p>They live longer than they should because of **time dilation** — Einstein saves them from decaying in the upper atmosphere.</p>

      <p>So yes — relativity is why muons reach your detector (or your body).</p>

      <h3>Particles from the Sun: Solar Wind, Flares, and Neutrinos</h3>

      <p>The Sun isn’t just a big ball of hot gas. It’s a particle factory.</p>

      <ul>
        <li><strong>Solar wind</strong>: a steady stream of electrons and protons flying out at 400–800 km/s</li>
        <li><strong>Solar flares</strong>: magnetic explosions on the Sun’s surface → high-energy protons and electrons</li>
        <li><strong>Coronal mass ejections (CMEs)</strong>: billion-ton plasma blobs hurled into space → can trigger geomagnetic storms</li>
        <li><strong>Solar neutrinos</strong>: from nuclear fusion in the core → 65 billion neutrinos per second pass through every cm² of your body</li>
      </ul>

      <p>And yes — they’re nearly impossible to detect. But we do it. Because physics.</p>

      <h3>Other Sources: The Universe Is Loud</h3>

      <p>It’s not just Earth and Sun.</p>

      <ul>
        <li><strong>Pulsars</strong>: spinning neutron stars that beam particles and radiation</li>
        <li><strong>Supernovae</strong>: explode and accelerate particles to insane energies</li>
        <li><strong>Active galactic nuclei</strong>: supermassive black holes eating stuff → jets of particles at near-light speed</li>
        <li><strong>Big Bang relics</strong>: cosmic microwave background photons, and maybe even dark matter</li>
      </ul>

      <p>The universe is basically a giant particle accelerator. And we’re in the splash zone.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>β⁻ decay: \\( n \\to p + e^- + \\bar{\\nu}_e \\)</li>
        <li>Geoneutrinos: probe Earth’s radioactive core</li>
        <li>Cosmic rays: high-energy protons → air showers → muons</li>
        <li>Muons reach ground due to time dilation</li>
        <li>Sun: solar wind, flares, CMEs, and solar neutrinos</li>
        <li>Pulsars, supernovae, AGNs: extra-solar particle sources</li>
      </ul>

      <p>And remember: the universe doesn’t care if you’re ready.  
      It only cares about particle production.</p>
    `
  },
  "detection": {
    title: "Particle detection",
    content: `
      <h3>Detection of Particles: When You Try to Catch the Uncatchable</h3>

      <p>Right. Let’s talk about <strong>how we detect particles</strong>.</p>

      <p>No, not the kind where you see a flash and say “got it.” We’re talking about <strong>detectors that catch the invisible</strong> — electrons, muons, neutrinos, photons — things that barely interact with matter.</p>

      <p>And yes — it’s hard. But we do it anyway.</p>

      <h3>Ionisation: When Particles Kick Electrons Off Atoms</h3>

      <p>Charged particles (e⁻, μ⁻, p⁺, etc.) rip through matter and knock electrons off atoms.</p>

      <p>This creates **ion-electron pairs** — and that’s what most detectors look for.</p>

      <p>The amount of ionisation depends on the particle’s charge and speed.</p>

      <p>Fast particles? Less ionisation (they don’t spend much time near atoms).</p>

      <p>Slow particles? More ionisation (they linger and cause chaos).</p>

      <p>This is why particles leave a “track” in cloud chambers, bubble chambers, and wire chambers.</p>

      <h3>Scintillation: When Matter Glows Because a Particle Passed Through</h3>

      <p>Some materials — like NaI crystals or plastic — emit light when a charged particle passes through.</p>

      <p>This is **scintillation**.</p>

      <p>The light is collected by photomultiplier tubes (PMTs) and turned into an electrical signal.</p>

      <p>Used in:</p>
      <ul>
        <li>Gamma-ray detectors</li>
        <li>Neutrino experiments (like Super-Kamiokande)</li>
        <li>Medical imaging (PET scans)</li>
      </ul>

      <p>And yes — it’s basically making matter flash when a particle hits it. Like a cosmic strobe light.</p>

      <h3>Cherenkov Radiation: The Sonic Boom of Light</h3>

      <p>When a charged particle travels faster than the speed of light <em>in a medium</em>, it emits a blue glow.</p>

      <p>No, it’s not breaking relativity — light slows down in water or glass, so particles can outpace it.</p>

      <p>This is **Cherenkov radiation** — and it’s directional.</p>

      <p>The angle of the cone tells you the particle’s speed.</p>

      <p>Used in neutrino detectors like Super-K — where the ring of light reveals the direction and type of particle.</p>

      <h3>Calorimeters: When You Just Want to Stop the Particle and Measure Its Energy</h3>

      <p>Sometimes you don’t care about the path. You just want to know how much energy the particle had.</p>

      <p>So you let it slam into a dense block of material — lead, iron, uranium — and let it create a shower of secondaries.</p>

      <p>You measure the total light or charge produced — that’s proportional to the original energy.</p>

      <p>Two types:</p>
      <ul>
        <li><strong>Electromagnetic calorimeters</strong>: for e⁻, γ — shower via bremsstrahlung and pair production</li>
        <li><strong>Hadronic calorimeters</strong>: for protons, pions, kaons — shower via strong interactions</li>
      </ul>

      <h3>Tracking Detectors: When You Want to See the Path</h3>

      <p>To see a particle’s trajectory, you need something that records position.</p>

      <ul>
        <li><strong>Cloud chambers</strong>: supersaturated vapour → condensation along track</li>
        <li><strong>Bubble chambers</strong>: superheated liquid → bubbles along track</li>
        <li><strong>Wire chambers</strong>: gas-filled tubes with wires → ionisation creates signal</li>
        <li><strong>Silicon trackers</strong>: solid-state detectors with high precision</li>
      </ul>

      <p>Put them in a magnetic field? The track curves — so you can measure momentum.</p>

      <h3>Neutrino Detection: The Ultimate Challenge</h3>

      <p>Neutrinos barely interact. Trillions pass through you every second. You never notice.</p>

      <p>To detect them, you need:</p>
      <ul>
        <li>Massive detectors (thousands of tons)</li>
        <li>Deep underground (to block cosmic rays)</li>
        <li>Ultra-pure materials (to reduce background)</li>
      </ul>

      <p>Example: Super-Kamiokande — 50,000 tons of water, lined with PMTs.</p>

      <p>When a neutrino scatters off an electron or nucleus, it produces a charged particle → Cherenkov light → ring pattern.</p>

      <p>And yes — we’ve detected neutrinos from the Sun, supernovae, reactors, and accelerators.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Ionisation: charged particles knock off electrons</li>
        <li>Scintillation: material glows when particle passes</li>
        <li>Cherenkov: blue light when particle > light speed in medium</li>
        <li>Calorimeters: absorb particle, measure total energy</li>
        <li>Tracking: see the path — cloud, bubble, wire, silicon</li>
        <li>Neutrinos: need massive, shielded, ultra-clean detectors</li>
      </ul>

      <p>And remember: the universe doesn’t care if you can’t see it.  
      It only cares about the cross-section.</p>
    `
  },
  "quantumII-summary": {
    title: "Pancakes are tasty",
    content: `
    <p>As promised, here is your special summary image!</p>
        <img src="images/Quantum cheat sheet 2.jpg" alt="Quantum II Summary" style="max-width: 30%; border-radius: 20px;" />
      
        <p> And here is your special download link!! <a href="images/Quantum cheat sheet 2.jpg" download>
              ⬇ Download this diagram
          </a> </p>
    `
  },
 

  // Subtopics for Astronomy
  "astro-intro": {
    title: "Introduction to Astrophysics: Ain't outer space just epic?",
    content: `
    <p>By far, one of the coolest things to stufy is outer space. Just something about a neverending sea of darkness, 
    decorated with stars and galaxies, is just undeniably epic. And you are lying to yourself if you say otherwise.
    </p>
    <p>But by far one of the best things about outer space is how much we in the moder world actually know about it. And
    whilst there are still many mysteries about the cosmos, you've gotta be honest, being able to know the sizes and 
    compositions of distant planets that even the most sophisticated telescopes can barely see is <i>pretty</i> bloody
    impressive, don't you think?</p>
    <p>But then you wonder...</p>
    <p>How <i>do</i> we know all this?</p>
    <p>After all, it's not like we have a timer which has been around from the beginning of the universe to tell us how
    old it is. But we know how old it is. How?</p>
    <p>Well, it's about time we found out! In this module, we'll look at:</p>
    <ul>
      <li>The celestial sphere</li>
      <li>How angles can be used to determine things about the universe</li>
      <li>Fluxes and Magnitudes</li> 
      <li>How telescopes work</li>
      <li>Black bodies and colours</li>
      <li>The solar system</li>
      <li>How we know things about exoplanets</li>
      <li>How we know things about stars</li>
      <li>How we know things about galaxies</li>
      <li>How we know things about the universe</li>
    </ul>

    `

  },
  "celestial-sphere": {
    title: "The Celestial Sphere",
    content: `
      <p>For most of history, people erroneously believed that the earth was at the centre of the universe, a view known
      as <i>geocentrism</i>. Under this view of the world, all the stars, galaxies, planets and whatnot are rotating
      around us. Something known as the <span class="definition" data-definition="An imaginary sphere carrying stars 
      that spins around the observer">
        celestial sphere
      </span>.
      </p>
      <p>This view was later replaced by <i>heliocentrism</i>, which states that the sun is rather at the centre of the
      universe.</p>
      <p>Pfft, I know, right? How stupid can you get? I mean, we, the intellegent people of the modern world that we (and our
      sun) are just one (two?) of many objects which move around through the vast emptiness of space. So realistically 
      both views are just as incorrect as each other</p>
      <p>Having said this, it is in many ways way more convenient to pretend that the celestial sphere isn't complete
      nonsense. This is because, even objects which are moving at hundreds of kilometres per second look like they don't
      move, even over many years. So let's give this method a go, and see wagwan.</p>

      <h3>Equatorial Co-ordinates</h3>
      <i>Real quick, is it 'coordinates' or 'co-ordinates'? I feel like the hyphen is correct, but everywhere I see the
      word, it's spelt without it. Like 'coordinates' looks like it should be pronounced 'kor-dinates'. Y'get me? NVM I'm
      just yapping...</i>

      <div class="container">
        <div class="text">
          <p>Equatorial co-ordinates are the way we describe the location of objects on the magical celestial sphere. They work
          pretty much exactly like latitude and longitude when describing points on earth. However, instead of using latitude
          we use <span class="definition" data-definition="Angle of an object measured from the celestial equator">'Declination'
          </span> (or Dec for short), and instead of longitude, we use <span class="definition" data-definition="Angle of an object 
          measured around the celestial equator">'Right Ascension'</span> (or RA for short).</p>
          <p>Both of these are angles measured in degrees, with declination, \\(\\delta\\), running between -90° and +90° 
          (with 0° being the equator), and right ascension, \\(\\alpha\\), running between 0° and 360° (with 0° being the 
          equivalent of the Greenwich meridian). The co-ordinates are then written in the form \\((\\alpha, \\space\\delta)\\).</p>
          <p> The sun moves around the celestial sphere along a path known as the <span class="definition" data-definition="Great 
          circle path on celestial sphere followed by the Sun">ecliptic</span>. This line is inclined at about 23.5° from the
          equator, and the sun completes a full path every year. Knowing both of these, we can label points in the year when the
          sun is at its highest, lowest, and middle declinations.</p>
        </div>
        <div class="image">
          <div class="image-floater">
            <div class="image-box" style="left: 0px;">
              <img src="images/Astronomy/Celestial sphere.png" alt="Celestial Sphere" style="max-width: 100%; 
              border-radius: 8px; left: -0px;" class="pop-image"/>
            </div>
            <span class="image-tooltip" style="left:-120%;"> <div class="image-tooltip-title">
            Figure 1: The celestial sphere</div><div class="image-tooltip-desc">
            Key aspects of the celestial sphere, viewed from the outside, with the observer <br> at
            its centre. Relative to the observer, the celestial sphere spins daily about <br> its North-South axis
            in a clockwise sense when viewed from above the North <br> Celestial Pole (NCP). The Sun travels
            along a great circle inclined by 23.6◦ <br>to the equator called the “ecliptic”, taking one year to
            complete a revolution. <br> It travels in a counter-clockwise sense looking from above the NCP. At
            the point <br> shown (month of May) it is moving towards the most Northerly <br>part of the ecliptic
            at the summer solstice.</div></span>
          </div>
        </div>
      </div>

      <p>My, oh my, it appears we have two new words, best get defining them:</p>
      <ul>
        <li>Equinox: The point in the year when the sun is at 0° declination, and the day and night are of equal length. This
        is also the time where the sun rises from the eastmost point and sets in its westmost point</li>
        <li>Solstice: The point in the year when the sun is at its highest or lowest declination. In summer, this is the time
        where the day is longest, and in the winter, this is the time where the day is shortest. This is also the time where the sun rises
        from the northmost point and sets in its southmost point</li>
      </ul>
      <p> One more thing worth considering:</p>
      <p> Being as declination is measured from the equator, it's actually kinda rubbish for people like me who
      live in jolly old England, which is nowhere near it. So instead, we can describe objects in the sky by how high above the
      horizon the object is from my (or whoever's) perspective. This is known as the <span class="definition" data-definition=
      "Angle of an object above an observer’s horizon">'altitude'</span>.

     
      <p>We will cover:</p>
      <ul>
        <li>The concept of the celestial sphere</li>
        <li>Celestial coordinates</li>
        <li>How to locate stars and constellations</li>
      </ul>
    `,
  },
  "parallax": {
    title: "Angles & Parallax",
    content: `
      <h3>Angles and Parallax</h3>

      <p>Before we can worry about things like how big objects we can see in the sky are, we must first consider
      something a bit for fundamental. Id est, how big does it <em>look</em> like it is? At first this may seem
      like a pretty tapped question, but it's pretty important. Specifically, we must consider what <strong>
      angle it subtends</strong></p>
      <p>What does it mean for an object to 'subtend an angle in the sky', you wonder? It is quite simple in
      practice, but I'm gonna have a hard time explaining this, so let me try my best:</p>
      <p>Imagine you look at something in the night sky, like the moon (you could try it with the sun too, if your
      eyesight isn't important to you). Then, draw a line from the bottom of the moon to your pupil, and then another
      one from the top of the moon to your pupil. The angle the two lines form is the angle the moon subtends.</p>
      <p>Was that a good explanation? IDK, hopefully the image I put here does a better job of explaining it 
      (if I even remember to put it here...).

      <p>Of course, the celestial sphere is bloody massive, and so the angles most things will be subtending are
      pretty flipping small. So small that degrees won't cut it.</p>
      <p>We could just use decimals and stuff, but where's the fun in that? We instead have two new members of the
      degree family, called arcminutes and arcseconds</p>
      <p>Arcminutes and Arcseconds work pretty similar to the way seconds and minutes do in measurements of time,
      with degrees functioning as the hours. As there are 60 minutes in an hour, there are 60 arcminutes (written
      as 60'). And as there are 60 seconds in a minute, there are 60 arcseconds (60") in an arcminute. In other 
      words:</p>

      <p>1º = 60' = 3600"</p>

      <h3>What Is Parallax?</h3>

      <p>Hold your finger up. Close one eye, then the other. Your finger seems to jump. That’s parallax — the apparent 
      shift of an object when you change your viewpoint.</p>

      <p>Now do it with Earth. Observe a star in January. Then again in July. 
      Earth has moved 2 AU across its orbit. The star appears to shift against the distant background. That shift 
      is the <strong>parallax angle</strong>, \\( p \\).</p>

      <p>And the distance to the star is:</p>

      <p>\\( d = \\frac{1}{p} \\)</p>

      <p>Where \\( d \\) is in <strong>parsecs</strong>, and \\( p \\) is in <strong>arcseconds</strong>.</p>

      <p>One parsec? That’s the distance where \\( p = 1'' \\) — about 3.26 light years.</p>

      <h3>Gaia: The Ultimate Star Mapper</h3>

      <p>Enter <strong>Gaia</strong> — a space telescope that’s measured the parallax of over a billion stars.</p>

      <p>Its precision? Down to **0.1 milliarcseconds**.</p>

      <p>That’s like seeing a human hair from 50 km away.</p>

      <p>And yes — it’s given us a 3D map of the Milky Way. No big deal.</p>

      <h3>Limits of Parallax</h3>

      <p>Parallax only works for relatively nearby stars.</p>

      <p>For distant galaxies? \\( p \\) is too small to measure.</p>

      <p>So we need other methods — like standard candles, redshift, and cosmic distance ladders.</p>

      <p>But parallax? It’s the foundation. The first rung.</p>

      <h3>Proper Motion: When Stars Actually Move</h3>

      <p>Parallax is just an apparent shift. But stars also have real motion across the sky — called <strong>proper motion</strong>.</p>

      <p>It’s measured in arcseconds per year.</p>

      <p>Example: Barnard’s Star — fastest proper motion at 10.3''/yr.</p>

      <p>It’s not going anywhere fast — just close to us.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Parallax: apparent shift due to Earth’s orbit</li>
        <li>\\( d (\\text{pc}) = 1 / p (\\text{arcsec}) \\)</li>
        <li>1 parsec = 3.26 light years</li>
        <li>Gaia: mapped over a billion stars with micro-arcsecond precision</li>
        <li>Proper motion: real motion across the sky</li>
        <li>Parallax only works for nearby stars</li>
      </ul>

      <p>And remember: the universe doesn’t care how small the angle is.  
      It only cares about the baseline.</p>
    `
  },
  "fluxes": {
    title: "Fluxes and magnitude",
    content: `
      <h3>Fluxes and Magnitudes: When Stars Are Too Dim to See (But We Do Anyway)</h3>

      <p>Right. Let’s talk about <strong>how bright stars appear</strong>.</p>

      <p>No, not the kind where you say “that one’s bright.” We’re talking about <strong>flux</strong> — the amount of energy hitting your telescope per second.</p>

      <p>And <strong>magnitudes</strong> — the ancient, backwards system where smaller numbers mean brighter stars.</p>

      <p>Yes, it’s dumb. But we’re stuck with it.</p>

      <h3>Flux: The Physics of Brightness</h3>

      <p>Flux \\( f \\) is power per unit area:</p>

      <p>\\( f = \\frac{L}{4\\pi d^2} \\)</p>

      <p>Where \\( L \\) is luminosity (total power output), and \\( d \\) is distance.</p>

      <p>So brightness drops with the square of distance. Double the distance? Quarter the flux.</p>

      <h3>Magnitudes: The Ancient Greek System</h3>

      <p>Hipparchus said: “Brightest stars are magnitude 1. Faintest are 6.”</p>

      <p>We kept it. But made it logarithmic.</p>

      <p>The magnitude scale is defined so that a difference of 5 magnitudes = factor of 100 in flux.</p>

      <p>So:</p>

      <p>\\( m_1 - m_2 = -2.5 \\log_{10} \\left( \\frac{f_1}{f_2} \\right) \\)</p>

      <p>And yes — the minus sign means brighter = smaller \\( m \\).</p>

      <h3>Absolute Magnitude: How Bright Is It *Really*?</h3>

      <p>Apparent magnitude \\( m \\)? How bright it looks from Earth.</p>

      <p>Absolute magnitude \\( M \\)? How bright it would look from **10 parsecs** away.</p>

      <p>The difference is the <strong>distance modulus</strong>:</p>

      <p>\\( m - M = 5 \\log_{10}(d) - 5 \\)</p>

      <p>So if you know \\( m \\) and \\( M \\), you can find \\( d \\).</p>

      <h3>Telescopes and Light Gathering</h3>

      <p>Your eye sees stars down to \\( m \\approx 6 \\).</p>

      <p>A 0.5 m telescope? Can see down to \\( m = 16 \\).</p>

      <p>Why? Because it gathers \\( (500/5)^2 = 10^4 \\) times more light.</p>

      <p>That’s a 10-magnitude gain.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Flux: \\( f = L / (4\\pi d^2) \\)</li>
        <li>Magnitude: \\( m_1 - m_2 = -2.5 \\log(f_1/f_2) \\)</li>
        <li>Absolute magnitude \\( M \\): brightness at 10 pc</li>
        <li>Distance modulus: \\( m - M = 5 \\log d - 5 \\)</li>
        <li>Telescopes see fainter stars by gathering more light</li>
      </ul>

      <p>And remember: the universe doesn’t care how dim a star is.  
      It only cares about the logarithm.</p>
    `
  },
  "telescopes": {
    title: "Telescopes",
    content: `
      <h3>Telescopes: Giant Eyes in the Sky (or on the Ground)</h3>

      <p>Right. Let’s talk about <strong>telescopes</strong>.</p>

      <p>No, not the kind you point at your neighbour. We’re talking about <strong>light buckets</strong> — giant mirrors and lenses that collect photons from the distant universe.</p>

      <p>And yes — they’re expensive. And huge. And sometimes in space.</p>

      <h3>Light Gathering Power</h3>

      <p>The bigger the aperture, the more light you collect.</p>

      <p>Flux collected \\( \\propto D^2 \\), where \\( D \\) is diameter.</p>

      <p>So a 10 m telescope collects 10,000× more light than your 1 cm eye.</p>

      <p>That’s why we can see galaxies billions of light years away.</p>

      <h3>Angular Resolution</h3>

      <p>How sharp is the image?</p>

      <p>The diffraction limit is:</p>

      <p>\\( \\theta \\approx \\frac{\\lambda}{D} \\)</p>

      <p>So bigger \\( D \\) → sharper image.</p>

      <p>Ground-based telescopes are limited by atmospheric turbulence — unless they use adaptive optics.</p>

      <p>Space telescopes (like Hubble or JWST)? No atmosphere → diffraction-limited.</p>

      <h3>Types of Telescopes</h3>

      <ul>
        <li><strong>Refractors</strong>: lenses — limited by chromatic aberration and size</li>
        <li><strong>Reflectors</strong>: mirrors — no chromatic aberration, can be huge</li>
        <li><strong>Radio telescopes</strong>: dish antennas — for long wavelengths</li>
      </ul>

      <p>Most big telescopes today are reflectors. Because mirrors don’t sag as much as lenses.</p>

      <h3>JWST and Hubble: The Dynamic Duo</h3>

      <p><strong>Hubble</strong>: visible and UV. In low Earth orbit.</p>

      <p><strong>JWST</strong>: infrared. At L2. Cooled to near absolute zero.</p>

      <p>Why infrared? To see the first galaxies, and to peer through dust clouds.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Light gathering \\( \\propto D^2 \\)</li>
        <li>Resolution \\( \\theta \\approx \\lambda / D \\)</li>
        <li>Reflectors > refractors for large scopes</li>
        <li>Adaptive optics fixes atmospheric blur</li>
        <li>JWST: infrared, cold, at L2</li>
      </ul>

      <p>And remember: the universe doesn’t care how big your mirror is.  
      It only cares about the signal-to-noise ratio.</p>
    `
  },
  "colours": {
    title: "Black-Bodies and Colours",
    content: `
      <h3>Black-Bodies and Colours: Why Stars Are Different Colours</h3>

      <p>Right. Let’s talk about <strong>black-body radiation</strong>.</p>

      <p>No, not the kind that records your crimes. We’re talking about <strong>how hot objects glow</strong> — from red-hot iron to white-hot stars.</p>

      <p>And yes — stars are nearly perfect black bodies.</p>

      <h3>Black-Body Spectrum</h3>

      <p>A black body emits radiation across all wavelengths — but peaks at a wavelength that depends on temperature.</p>

      <p>Wien’s Law:</p>

      <p>\\( \\lambda_{\\text{max}} T = 2.9 \\times 10^{-3} \\, \\text{m K} \\)</p>

      <p>Hotter star? Bluer peak.</p>

      <p>Cooler star? Redder peak.</p>

      <h3>Stefan-Boltzmann Law</h3>

      <p>Total power radiated per unit area:</p>

      <p>\\( f = \\sigma T^4 \\)</p>

      <p>So double the temperature? 16× more power.</p>

      <p>That’s why O-stars are so bright.</p>

      <h3>Colour Indices: Measuring Star Colours</h3>

      <p>We use filters: blue (B), visual (V), red (R).</p>

      <p>Colour index: \\( B - V \\)</p>

      <p>Small \\( B-V \\)? Blue star (hot).</p>

      <p>Large \\( B-V \\)? Red star (cool).</p>

      <p>Gaia uses \\( G_{BP} - G_{RP} \\) — same idea.</p>

      <h3>Hertzsprung-Russell Diagram</h3>

      <p>Plot \\( M_G \\) (absolute magnitude) vs \\( G_{BP} - G_{RP} \\) (colour).</p>

      <p>Most stars lie on the <strong>main sequence</strong> — a diagonal band from hot & bright to cool & dim.</p>

      <p>Giants and supergiants? Top right — bright but cool.</p>

      <p>White dwarfs? Bottom left — hot but dim.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Wien’s Law: \\( \\lambda_{\\text{max}} T = 2.9 \\times 10^{-3} \\)</li>
        <li>Stefan-Boltzmann: \\( f = \\sigma T^4 \\)</li>
        <li>\\( B - V \\) colour index → temperature</li>
        <li>HR diagram: main sequence, giants, white dwarfs</li>
        <li>Hot stars = blue, cool stars = red</li>
      </ul>

      <p>And remember: the universe doesn’t care what colour you paint your star.  
      It only cares about the temperature.</p>
    `
  },
  "masses": {
    title: "Astronomical Masses",
    content: `
    `
  },
  "solar-system": {
    title: "The solar system",
    content: `
      <h3>The Solar System: A Messy Family of Planets</h3>

      <p>Right. Let’s talk about <strong>our cosmic backyard</strong>.</p>

      <p>No, not the garden. We’re talking about <strong>the Sun, eight planets, moons, asteroids, comets, and a whole lot of ice</strong>.</p>

      <p>And yes — it’s not as orderly as textbooks make it seem.</p>

      <h3>Terrestrial vs Giant Planets</h3>

      <p><strong>Terrestrial</strong>: Mercury, Venus, Earth, Mars — rocky, dense, small.</p>

      <p><strong>Giant</strong>: Jupiter, Saturn, Uranus, Neptune — gassy, icy, huge.</p>

      <p>The split happened at the <strong>frost line</strong> — where volatiles like water and methane could condense.</p>

      <p>Inside: only rock and metal.</p>

      <p>Outside: ice + rock → bigger cores → gas giants.</p>

      <h3>Kuiper Belt and Oort Cloud</h3>

      <p><strong>Kuiper Belt</strong>: icy bodies beyond Neptune — source of short-period comets.</p>

      <p><strong>Oort Cloud</strong>: spherical shell of comets at ~50,000 AU — source of long-period ones.</p>

      <p>Passing stars can nudge Oort Cloud comets into the inner system.</p>

      <h3>Planetary Temperatures</h3>

      <p>Equilibrium temperature:</p>

      <p>\\( T = \\left( \\frac{L_\\odot}{16\\pi \\sigma d^2} \\right)^{1/4} \\)</p>

      <p>Venus is hotter than expected — thanks to a runaway greenhouse effect.</p>

      <p>Earth? Stable climate — for now.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Terrestrial: rocky, inner system</li>
        <li>Giant: gassy/icy, outer system</li>
        <li>Frost line: where ices condense</li>
        <li>Kuiper Belt: short-period comets</li>
        <li>Oort Cloud: long-period comets</li>
        <li>Venus: runaway greenhouse</li>
      </ul>

      <p>And remember: the universe doesn’t care how many planets you have.  
      It only cares about the frost line.</p>
    `
  },
  "exoplanets": {
    title: "Exoplanets",
    content: `
      <h3>Exoplanets: Planets Around Other Stars</h3>

      <p>Right. Let’s talk about <strong>exoplanets</strong>.</p>

      <p>No, not the kind in sci-fi movies. We’re talking about <strong>real planets orbiting real stars</strong> — thousands of them.</p>

      <p>And yes — some might be habitable.</p>

      <h3>Detection Methods</h3>

      <ul>
        <li><strong>Transit</strong>: planet passes in front of star → dip in brightness</li>
        <li><strong>Radial Velocity</strong>: star wobbles → Doppler shift in spectrum</li>
        <li><strong>Direct Imaging</strong>: block starlight, take picture</li>
        <li><strong>Microlensing</strong>: planet bends light of background star</li>
        <li><strong>Astrometry</strong>: star wobbles on the sky</li>
      </ul>

      <h3>Transit Method</h3>

      <p>Depth of dip: \\( \\delta = R_p^2 / R_*^2 \\)</p>

      <p>Duration: depends on orbit and star size.</p>

      <p>Atmosphere? Can measure transmission spectrum during transit.</p>

      <h3>Radial Velocity</h3>

      <p>Star’s speed: \\( v_* = \\frac{M_p \\sin i}{M_*} \\sqrt{\\frac{G}{a}} \\)</p>

      <p>Best for massive, close-in planets.</p>

      <h3>Kepler and TESS</h3>

      <p><strong>Kepler</strong>: stared at one patch — found thousands.</p>

      <p><strong>TESS</strong>: surveys whole sky — finds nearby planets.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Transit: dip in light</li>
        <li>Radial velocity: Doppler wobble</li>
        <li>Direct imaging: hard, but possible</li>
        <li>Microlensing: rare, but detects distant planets</li>
        <li>Kepler & TESS: planet factories</li>
      </ul>

      <p>And remember: the universe doesn’t care how many planets you find.  
      It only cares about the signal-to-noise.</p>
    `
  },
  "stars": {
    title: "Stars",
    content: `
      <h3>Stars: How They Live, Burn, and Die</h3>

      <p>Right. Let’s talk about <strong>stars</strong>.</p>

      <p>No, not celebrities. We’re talking about <strong>giant balls of plasma that fuse hydrogen into helium</strong> — and sometimes explode.</p>

      <p>And yes — your Sun will die. But not for 5 billion years.</p>

      <h3>Main Sequence</h3>

      <p>Stars spend 90% of their lives fusing H → He in the core.</p>

      <p>Massive stars: hot, blue, short-lived.</p>

      <p>Low-mass stars: cool, red, live forever (almost).</p>

      <h3>Post-Main Sequence</h3>

      <p>When H runs out in the core, the star evolves.</p>

      <ul>
        <li>Red giant: H fusion in shell, He core contracts</li>
        <li>Helium flash: He fusion starts in degenerate core</li>
        <li>Horizontal branch: He → C in core</li>
        <li>Asymptotic giant branch: He & H shell fusion</li>
      </ul>

      <h3>Stellar Endpoints</h3>

      <ul>
        <li><strong>White dwarf</strong>: Earth-sized, supported by electron degeneracy</li>
        <li><strong>Neutron star</strong>: city-sized, supported by neutron degeneracy</li>
        <li><strong>Black hole</strong>: gravity wins</li>
      </ul>

      <p>Mass determines fate.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Main sequence: H → He fusion</li>
        <li>Red giant → He flash → horizontal branch</li>
        <li>White dwarf: < 8 M☉</li>
        <li>Neutron star: 8–20 M☉</li>
        <li>Black hole: > 20 M☉</li>
      </ul>

      <p>And remember: the universe doesn’t care how bright your star is.  
      It only cares about its mass.</p>
    `
  },
  "star-physics": {
    title: "Stellar Astrophysics",
    content: `
      <h3>Stellar Astrophysics: How Stars Live, Burn, and Die</h3>

      <p>Right. Let’s talk about <strong>stellar astrophysics</strong>.</p>

      <p>No, not the kind where you stare at stars and feel things. We’re talking about <strong>how stars work, evolve, and eventually die in spectacular fashion</strong>.</p>

      <p>And yes — your Sun will die. But not for 5 billion years. So relax.</p>

      <h3>The Main Sequence: Where Stars Spend 90% of Their Lives</h3>

      <p>Stars fuse hydrogen into helium in their cores.</p>

      <p>More massive stars? Hotter, brighter, bluer, and shorter-lived.</p>

      <p>Less massive? Cooler, dimmer, redder, and live for trillions of years.</p>

      <p>The main sequence is basically a **mass sequence** — from 0.1 \\( M_\\odot \\) at the bottom right to 10 \\( M_\\odot \\) and up at the top left.</p>

      <h3>Post-Main Sequence Evolution</h3>

      <p>When hydrogen runs out in the core, the star evolves off the main sequence.</p>

      <ul>
        <li><strong>Red giant</strong>: hydrogen shell burning, helium core contracts</li>
        <li><strong>Helium flash</strong>: in low-mass stars, helium fusion starts suddenly in a degenerate core</li>
        <li><strong>Horizontal branch</strong>: helium → carbon in the core</li>
        <li><strong>Asymptotic giant branch (AGB)</strong>: helium and hydrogen shell burning</li>
      </ul>

      <p>During AGB, stars lose mass via strong winds — creating beautiful planetary nebulae.</p>

      <h3>Stellar Endpoints: What’s Left After the Party?</h3>

      <p>It all depends on mass.</p>

      <ul>
        <li><strong>White dwarfs</strong>: < 8 \\( M_\\odot \\). Earth-sized, supported by electron degeneracy pressure.</li>
        <li><strong>Neutron stars</strong>: 8–20 \\( M_\\odot \\). City-sized, supported by neutron degeneracy pressure. Formed in core-collapse supernovae.</li>
        <li><strong>Black holes</strong>: > 20 \\( M_\\odot \\). Gravity wins. No known force can stop the collapse.</li>
      </ul>

      <h3>Mass Limits: When Degeneracy Pressure Fails</h3>

      <p><strong>Chandrasekhar limit</strong>: \\( 1.4 \\, M_\\odot \\) — maximum mass for a white dwarf.</p>

      <p><strong>Tolman-Oppenheimer-Volkoff limit</strong>: ~2–3 \\( M_\\odot \\) — maximum for a neutron star.</p>

      <p>Exceed them? You get a black hole.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Main sequence: H → He fusion</li>
        <li>Red giant → helium flash → horizontal branch → AGB</li>
        <li>White dwarf: < 8 \\( M_\\odot \\)</li>
        <li>Neutron star: 8–20 \\( M_\\odot \\)</li>
        <li>Black hole: > 20 \\( M_\\odot \\)</li>
        <li>Chandrasekhar limit: 1.4 \\( M_\\odot \\)</li>
        <li>Mass determines fate</li>
      </ul>

      <p>And remember: the universe doesn’t care how bright your star is.  
      It only cares about its mass.</p>
    `
  },
  "galaxies": {
    title: "Galaxies",
    content: `
      <h3>Galaxies: When Billions of Stars Throw a Party</h3>

      <p>Right. Let’s talk about <strong>galaxies</strong>.</p>

      <p>No, not the chocolate bar. We’re talking about <strong>giant collections of billions of stars, gas, dust, and dark matter</strong> — all held together by gravity.</p>

      <p>And yes — they come in different shapes, sizes, and levels of drama.</p>

      <h3>Hubble Classification: The Cosmic Zoo</h3>

      <p>Edwin Hubble sorted galaxies into three main types:</p>
      <ul>
        <li><strong>Ellipticals (E)</strong>: smooth, featureless, little gas, mostly old stars</li>
        <li><strong>Spиралs (S)</strong>: disks with spiral arms, lots of gas, ongoing star formation</li>
        <li><strong>Irregulars (Irr)</strong>: no defined shape, often due to interactions</li>
      </ul>

      <p>There’s also the <strong>lenticular (S0)</strong> type — disk without spiral arms.</p>

      <h3>Weighing Galaxies: The Rotation Curve Problem</h3>

      <p>We can measure how fast stars and gas orbit the centre using Doppler shifts.</p>

      <p>According to Kepler, speed should drop with radius: \\( v \\propto 1/\\sqrt{r} \\).</p>

      <p>But observations show: \\( v \\) stays constant or even increases.</p>

      <p>That means there’s more mass than we can see — <strong>dark matter</strong>.</p>

      <p>And it dominates. A spiral galaxy is like a tiny visible speck in a giant dark matter halo.</p>

      <h3>Cepheid Variables: The Rulers of the Universe</h3>

      <p>Cepheid variable stars pulsate with a period that depends on their luminosity.</p>

      <p>So measure the period → know the true brightness → compare to apparent brightness → get distance.</p>

      <p>This is how Hubble proved Andromeda was outside the Milky Way.</p>

      <h3>Active Galactic Nuclei (AGN): When Galaxies Get Loud</h3>

      <p>Some galaxies have incredibly bright cores — powered by supermassive black holes.</p>

      <p>As matter falls in, it heats up and emits insane amounts of energy.</p>

      <p>Types:</p>
      <ul>
        <li><strong>Quasars</strong>: brightest, visible across the universe</li>
        <li><strong>Seyfert galaxies</strong>: bright cores, but host galaxy visible</li>
        <li><strong>Blazars</strong>: jets pointed at us → highly variable</li>
      </ul>

      <p>We now think all galaxies have supermassive black holes — most are just asleep.</p>

      <h3>The Distribution of Galaxies</h3>

      <p>Galaxies aren’t scattered randomly. They form:</p>
      <ul>
        <li><strong>Groups</strong>: small collections (e.g. Local Group)</li>
        <li><strong>Clusters</strong>: hundreds to thousands of galaxies</li>
        <li><strong>Superclusters</strong>: clusters grouped together</li>
        <li><strong>Void</strong>: huge empty regions</li>
      </ul>

      <p>The universe has a “cosmic web” structure — like a sponge made of galaxies.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Hubble types: E, S, Irr, S0</li>
        <li>Rotation curves → dark matter</li>
        <li>Cepheids: period-luminosity relation → distance</li>
        <li>AGN: powered by supermassive black holes</li>
        <li>Galaxies cluster into groups, clusters, superclusters</li>
        <li>Cosmic web: galaxies on filaments, voids in between</li>
      </ul>

      <p>And remember: the universe doesn’t care how many stars you see.  
      It only cares about the dark matter.</p>
    `
  },
  "universe": {
    title: "The Universe",
    content: `
      <h3>The Universe: From Big Bang to Now</h3>

      <p>Right. Let’s talk about <strong>the Universe</strong>.</p>

      <p>No, not your universe. The actual one.</p>

      <p>It started with a Big Bang. It’s expanding. And it’s full of dark energy.</p>

      <p>And yes — we’re still figuring it out.</p>

      <h3>Big Bang and Recombination</h3>

      <p>Universe began ~13.8 billion years ago.</p>

      <p>Hot, dense, expanding.</p>

      <p>After ~380,000 years: cooled enough for electrons to bind to protons → <strong>recombination</strong>.</p>

      <p>Photons decoupled → we see them today as the <strong>CMB</strong>.</p>

      <h3>Cosmic Microwave Background</h3>

      <p>CMB: black-body spectrum at 2.7 K.</p>

      <p>Tiny anisotropies → seeds of galaxies.</p>

      <h3>Dark Energy and Acceleration</h3>

      <p>Universe not just expanding — accelerating.</p>

      <p>Caused by <strong>dark energy</strong> — 68% of the universe.</p>

      <p>Dark matter? 27%.</p>

      <p>Normal matter? 5%.</p>

      <h3>TL;DR</h3>

      <ul>
        <li>Big Bang: 13.8 Gyr ago</li>
        <li>Recombination: 380,000 yr → CMB</li>
        <li>CMB: 2.7 K, black-body</li>
        <li>Dark energy: 68%, causes acceleration</li>
        <li>Dark matter: 27%</li>
        <li>Normal matter: 5%</li>
      </ul>

      <p>And remember: the universe doesn’t care about your place in it.  
      It only cares about the metric expansion.</p>
    `
  },
  "astro-summary": {
    title: "THE... EARTH!!!!",
    content: `
    `
  }
};

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function generateFloatingNav() {
  const headings = document.querySelectorAll('h3');
  const nav = document.getElementById('floating-nav');
  if (!nav || headings.length === 0) return;

  nav.innerHTML = ''; // Clear previous buttons

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }

    const btn = document.createElement('button');
    btn.textContent = heading.textContent;
    btn.onclick = () => scrollToSection(heading.id);
    nav.appendChild(btn);
  });
}










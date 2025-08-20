import Container from '@/components/ui/container';

export default function Founders() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            Meet the founders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Devavi is named after our fathers - Devendra and Ravi. We built this agency to carry forward their values of integrity, hard work, and treating every relationship with care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              S
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Swastik Dubey
            </h3>
            <p className="text-primary font-medium mb-4">Co-founder</p>
            <p className="text-muted-foreground leading-relaxed">
              Swastik's journey in performance marketing began with a simple belief: transparency builds trust. Named after his father Devendra Kumar Dubey, who rose to the Reserve Bank of India through sheer perseverance, Swastik brings the same dedication to every client relationship. He ensures that every campaign decision is backed by data and every expectation is grounded in reality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              A
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Anushka Sirohi
            </h3>
            <p className="text-primary font-medium mb-4">Co-founder</p>
            <p className="text-muted-foreground leading-relaxed">
              Anushka personally oversees every single account at Devavi, bringing years of experience from industry-leading brands. The "Ravi" in Devavi honors her late father, Ravi Prakash Sirohi, whose values of hard work and integrity guide every client interaction. She believes that performance marketing isn't just about numbers - it's about building sustainable growth that founders can be proud of.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Why we built Devavi
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Performance marketing has become a space where inflated promises and high retainers often go hand-in-hand. Too many agencies operate on a model where the focus is solely on signing clients, without ever being equipped to deliver on their claims. We built Devavi in response to this chaos - offering top-tier performance marketing services to a limited set of clients, with realistic goals, transparent conversations, and hands-on execution that actually moves the needle.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

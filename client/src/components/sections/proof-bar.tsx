import Container from '@/components/ui/container';

const clients = [
  { name: 'Goat Life', file: '/client-goatlife.png' },
  { name: 'Ekatra', file: '/client-ekatra.png' },
  { name: 'Toddler Thing', file: '/client-toddlerthing.png' },
  { name: 'Suvaa', file: '/client-suvaa.png' },
  { name: 'Born Plus', file: '/client-bornplus.png' },
  { name: 'Angel Rocket', file: '/client-angelrocket.png' },
  { name: 'Fix My Curls', file: '/client-fixmycurls.png' },
];

function LogoItem({ name, file }: { name: string; file: string }) {
  return (
    <div className="flex items-center justify-center flex-shrink-0 mx-10">
      <img
        src={file}
        alt={name}
        className="h-[97px] w-auto object-contain"
        style={{ filter: 'brightness(2.5) contrast(1.1)' }}
      />
    </div>
  );
}

export default function ProofBar() {
  const logoItems = clients.map((client) => (
    <LogoItem key={client.name} name={client.name} file={client.file} />
  ));

  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-12">
            Brands We've Helped Scale
          </p>
        </div>
      </Container>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {logoItems}
          {logoItems}
        </div>
      </div>
    </section>
  );
}

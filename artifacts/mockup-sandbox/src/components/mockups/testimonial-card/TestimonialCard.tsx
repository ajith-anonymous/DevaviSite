export function TestimonialCard() {
  return (
    <div
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <style>{`
        body, html { background: hsl(220, 20%, 6%); }
        .card-bg { background: hsl(220, 18%, 9%); }
        .accent { color: hsl(265, 90%, 68%); }
        .text-dim { color: hsl(220, 12%, 55%); }
        .text-light { color: hsl(220, 15%, 95%); }
        .divider { background: hsl(220, 15%, 14%); }
      `}</style>

      <div
        className="card-bg rounded-2xl overflow-hidden w-full max-w-md"
        style={{
          border: "1px solid hsl(220, 15%, 16%)",
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.08), 0 24px 48px rgba(0,0,0,0.4)",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, hsl(265, 90%, 68%), transparent)",
          }}
        />

        {/* Photo — full-width, crops the empty transparent top */}
        <div
          style={{
            height: "260px",
            background: "hsl(220, 18%, 9%)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/goatlife-photo-v2.png`}
            alt="Yash Kalra with Swastik and Anushka from Devavi Media"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "bottom center",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col gap-5">
          {/* Quote mark */}
          <div
            className="accent"
            style={{
              fontSize: "56px",
              lineHeight: "0.7",
              fontWeight: 800,
              opacity: 0.55,
              letterSpacing: "-2px",
            }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <p
            className="text-light"
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.75,
              marginTop: "-8px",
            }}
          >
            I genuinely think getting Swastik and Anushka onboard was one of the earliest and best decisions we made at Goat Life. The reason it worked from day one is because we were aligned in how we think — execution first, everything else later.
            <br /><br />
            Truly grateful to have you guys on the same boat.
          </p>

          {/* Divider */}
          <div className="divider" style={{ height: "1px", width: "100%" }} />

          {/* Attribution */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-light"
                style={{
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.01em",
                }}
              >
                Yash Kalra
              </p>
              <p
                className="text-dim"
                style={{
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                Founder — Goat Life
              </p>
            </div>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "hsl(265, 90%, 68%)",
                opacity: 0.7,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

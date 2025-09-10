import React from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
  ThemeProvider,
  CssBaseline,
  IconButton
} from "@mui/material";
import { createTheme, alpha } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PlaceIcon from "@mui/icons-material/Place";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InstagramIcon from "@mui/icons-material/Instagram";
// Fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
// Optional serif for big titles (install first: npm i @fontsource/playfair-display)
// import "@fontsource/playfair-display/700.css";
// import "@fontsource/playfair-display/800.css";

/** Data / Assets */
const portfolio = {
  name: "Dharma Teja",
  role: "Actor / Performing Artist",
  age: 28,
  location: "Hyderabad, India",
  height: "5 ft 9 in",
  phone: "+91 7093514777",
  email: "dubadharma@gmail.com",
  languages: ["Telugu", "English", "Hindi"],
  pdfUrl: "/Dharma Portfolio.pdf",
  reels: [
    { title: "Big Boys", channel: "RP Movie Makers" },
    { title: "Gaganana", channel: "RP Movie Makers" },
    { title: "Apudepudo", channel: "RP Movie Makers" },
    { title: "Rave Kannamma", channel: "RP Movie Makers" }
  ],
  films: [
    "MAD SQUARE",
    "Geethanjali 2",
    "Drinker Sai",
    "Tribananadhari Barbaric",
    "Barabar Premistha",
    "Sadha Nannu Nadipe",
    "Vanavillu"
  ],
  photos: [
    "/images/dharma01.jpeg",
    "/images/dharma03.jpeg",
    "/images/dharma04.jpeg",
    "/images/dharma05.jpeg",
    "/images/dharma06.jpeg",
    "/images/dharma07.jpeg",
    "/images/dharma08.jpeg",
    "/images/dharma09.jpeg",
  ]
};

const moviesDetailed = [
  {
    title: "MAD SQUARE",
    image: "/films/mad-square.jpg",
    summary:
      "An urban, character-led story set over a charged day in a bustling neighborhood, as a few strangers’ choices collide. A grounded drama with splashes of dark humor about ambition, friendship, and consequences.",
    moreUrl: "",
    trailerUrl: "https://www.youtube.com/watch?v=x9jlQ0_K5Zc"
  },
  {
    title: "Geethanjali 2",
    image: "/films/geethangali-2.jpg",
    summary:
      "A sequel to the hit horror-comedy, blending chills and laughs as a film crew returns to a set with an unsettling past. Secrets resurface, pranks turn eerie, and the line between make-believe and the supernatural blurs.",
    moreUrl: "",
    trailerUrl: "https://www.youtube.com/watch?v=uLgO1QchbNI"
  },
  {
    title: "Drinker Sai",
    image: "/films/drinker-sai.jpg",
    summary:
      "A character-driven dramedy about Sai, a charming but wayward man whose drinking has cost him more than he admits. When life forces a reckoning, he must choose between old habits and the people who still believe in him.",
    moreUrl: "",
    trailerUrl: "https://www.youtube.com/watch?v=cWQflkvQ3fE"
  },
  {
    title: "Tribananadhari Barbaric",
    image: "/films/tribananadhari-barbaric.jpg",
    summary:
      "A gritty thriller about justice and its price, following a lone crusader drawn into a violent underworld. Title spelling/credits to be confirmed—update with official details when available.",
    moreUrl: "",
    trailerUrl: "https://www.youtube.com/watch?v=LcDvfjEXrAY"
  },
  {
    title: "Barabar Premistha",
    image: "/films/barabar-premistha.jpg",
    summary:
      "A romantic drama about two people from different worlds navigating family expectations and hard choices. A heartfelt look at loyalty, timing, and the courage it takes to love without guarantees.",
    moreUrl: "",
    trailerUrl: "https://www.youtube.com/watch?v=iOZngWD2QXg"
  },
  {
    title: "Sadha Nannu Nadipe",
    image: "/films/sadha-nannu-nadipe.jpg",
    summary:
      "A warm-hearted love story about an irrepressibly optimistic young man who falls for a guarded woman. His optimism pulls them closer, but real stakes test whether love can carry them through.",
    moreUrl: "",
    trailerUrl: "https://www.youtube.com/watch?v=QbV4xqmLuHE"
  },
  {
    title: "Vanavillu",
    image: "/films/vanavillu.jpg",
    summary:
      "A family drama about second chances and reconciliation. After years apart, a couple attempts to rebuild trust for the sake of their child, finding hope like a rainbow after a storm.",
    moreUrl: "",
    trailerUrl: "https://www.youtube.com/watch?v=rIQ2X13fqjI"
  }
];

const MovieCard = ({ movie }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    sx={{
      p: 1,
      borderRadius: 4,
      background: "linear-gradient(135deg, rgba(230,193,123,.35), rgba(176,123,255,.25))",
      boxShadow: "0 16px 38px rgba(0,0,0,.35)",
      mb: 2,
      width: "100%",
      height: "100%" // let the Grid item stretch it
    }}
  >
    <Box
      sx={{
        borderRadius: 3,
        bgcolor: "background.paper",
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100%"
      }}
    >
      {/* Poster – fixed width on md+, fixed 2:3 aspect ratio always */}
      <Box sx={{ width: { xs: "100%", md: 260 }, flexShrink: 0 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "2 / 3",                 // uniform height/width ratio
            overflow: "hidden",
            borderRadius: 2,
            background: "linear-gradient(180deg,#1a1410,#0f0b08)"
          }}
        >
          <Box
            component="img"
            src={movie.image}
            alt={movie.title + " poster"}
            loading="lazy"
            decoding="async"
            draggable="false"
            onError={(e) => {
              e.currentTarget.outerHTML =
                '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#1a141f;color:#b9a07a;font-size:12px;padding:8px;text-align:center">Add poster: ' +
                movie.image +
                "</div>";
            }}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",                  // crops to keep uniform size
              display: "block"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(60% 90% at 80% 30%, rgba(0,0,0,0) 35%, rgba(0,0,0,.45) 100%)",
              pointerEvents: "none"
            }}
          />
        </Box>
      </Box>

      {/* Details */}
      <Box sx={{ p: { xs: 2, sm: 3 }, flex: 1, display: "flex", flexDirection: "column" }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <MovieCreationIcon fontSize="small" color="primary" />
          <Typography variant="h6" fontWeight={800} sx={{ fontFamily: "Playfair Display, serif" }}>
            {movie.title}
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: "rgba(255,255,255,.82)",
            // Optional: clamp lines for more uniform card heights
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {movie.summary}
        </Typography>

        <Stack direction="row" spacing={1.25} sx={{ mt: "auto", pt: 2, flexWrap: "wrap" }}>
          {movie.trailerUrl ? (
            <Button
              size="small"
              variant="contained"
              color="primary"
              component="a"
              href={movie.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Trailer
            </Button>
          ) : null}
          {movie.moreUrl ? (
            <Button
              size="small"
              variant="outlined"
              color="primary"
              component="a"
              href={movie.moreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              More Info
            </Button>
          ) : null}
        </Stack>
      </Box>
    </Box>
  </Box>
);


/* THEME: Dark + gold */
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#E6C17B" },
    secondary: { main: "#b07bff" },
    background: { default: "#0e0b09", paper: "#15100D" }
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    h1: { fontFamily: "Playfair Display, serif" },
    h2: { fontFamily: "Playfair Display, serif" },
    h3: { fontFamily: "Playfair Display, serif" },
    h4: { fontFamily: "Playfair Display, serif" },
    button: { textTransform: "none", fontWeight: 700 }
  },
  shape: { borderRadius: 16 }
});

/* Motion helpers */
const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };
const fast = { duration: 0.45 };

/* Small reusable components */
const Pill = ({ children, sx = {} }) => (
  <Chip
    label={children}
    variant="outlined"
    sx={{
      mr: 1,
      mb: 1,
      borderRadius: "999px",
      borderColor: "rgba(230,193,123,.4)",
      color: "rgba(230,193,123,.95)",
      transition: "all .2s",
      "&:hover": {
        boxShadow: "0 10px 24px rgba(230,193,123,.18)",
        transform: "translateY(-2px)"
      },
      ...sx
    }}
  />
);

/* Premium framed photo; framePx=0 removes outer frame (used for full-bleed gallery) */
const Photo = ({ src, alt, ratio = { xs: "3 / 4", md: "3 / 4" }, maxH = { md: 520 }, framePx = 3 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
  >
    <Box
      sx={{
        p: framePx ? `${framePx}px` : 0,
        borderRadius: 5,
        background: framePx
          ? "conic-gradient(from 180deg at 50% 50%, rgba(230,193,123,.9), rgba(176,123,255,.9), rgba(230,193,123,.9))"
          : "transparent",
        boxShadow: framePx
          ? "0 14px 40px rgba(230,193,123,.10), 0 6px 18px rgba(0,0,0,.40)"
          : "none"
      }}
    >
      <Box
        sx={{
          borderRadius: framePx ? 4 : 0,
          overflow: "hidden",
          width: "100%",
          aspectRatio: ratio,
          maxHeight: maxH,
          position: "relative",
          background: "linear-gradient(180deg,#1a1410,#0f0b08)"
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.outerHTML =
              '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1a1410;color:#b9a07a;font-size:14px">Add your image at ' +
              src +
              "</div>";
          }}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 90% at 80% 30%, rgba(0,0,0,0) 35%, rgba(0,0,0,.45) 100%)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,.06)",
            pointerEvents: "none"
          }}
        />
      </Box>
    </Box>
  </motion.div>
);

const GoldRule = ({ sx = {} }) => <Box sx={{ height: 1, bgcolor: "rgba(230,193,123,.25)", my: 3, ...sx }} />;

const GlowCard = ({ children, sx = {}, ...props }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    sx={{
      p: 1,
      borderRadius: 4,
      background: "linear-gradient(135deg, rgba(230,193,123,.35), rgba(60,42,22,.35))",
      boxShadow: "0 20px 60px rgba(230,193,123,.08)",
      ...sx
    }}
    {...props}
  >
    <Box sx={{ borderRadius: 3, bgcolor: "background.paper", p: { xs: 2, sm: 3 } }}>
      {children}
    </Box>
  </Box>
);

/* Transparent-by-default Nav; fixed and gains blur/bg after slight scroll */
const Nav = () => {
  const trigger = useScrollTrigger({ threshold: 4, disableHysteresis: true });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 1 : 0}
      sx={{
        zIndex: (t) => t.zIndex.drawer + 1,
        bgcolor: trigger ? alpha("#0e0b09", 0.65) : "transparent",
        backdropFilter: trigger ? "saturate(160%) blur(8px)" : "none",
        WebkitBackdropFilter: trigger ? "saturate(160%) blur(8px)" : "none",
        boxShadow: trigger ? "0 6px 18px rgba(0,0,0,.35)" : "none",
        transition: "all .25s ease"
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 }, justifyContent: "flex-end", gap: 3 }}>
        {[
          { href: "#about", label: "About Me" },
          { href: "#gallery", label: "Gallery" },
          { href: "#contact", label: "Contact Me" }
        ].map((l) => (
          <Button
            key={l.href}
            href={l.href}
            size="small"
            sx={{ color: "rgba(255,255,255,.85)", "&:hover": { color: "primary.main" } }}
          >
            {l.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

/* HERO with BACKGROUND IMAGE */
const Hero = () => {
  const phoneHref = "tel:" + portfolio.phone.split(" ").join("");
  const emailHref =
    "mailto:" +
    portfolio.email +
    "?subject=" +
    encodeURIComponent("Audition Opportunity for " + portfolio.name);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "70vh", md: "120vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundAttachment: { md: "fixed" }
      }}
    >
      {/* Background image + cinematic overlays */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(14,11,9,.88) 0%, rgba(14,11,9,.72) 35%, rgba(14,11,9,.40) 60%, rgba(14,11,9,.65) 100%),
            url(${portfolio.photos[0]})
          `,
          backgroundSize: "cover",
          backgroundPosition: { xs: "50% 25%", md: "center" },
          filter: "contrast(1.05) saturate(1.05)"
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(70% 100% at 80% 0%, rgba(230,193,123,.10) 0%, rgba(230,193,123,0) 60%)"
        }}
      />
<Container maxWidth="xl" sx={{ position: "relative" }}>
  <Grid container spacing={6} alignItems="center">
    <Grid item xs={12} md={8} lg={7}>
      <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
        {/* Name */}
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 900,
            letterSpacing: ".5px",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            lineHeight: 1.1,
            color: "#fff",
            mb: 0.5
          }}
        >
          Dharma Teja Duba
        </Typography>

        {/* Role headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 800,
            letterSpacing: ".5px",
            fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" },
            lineHeight: 1.1
          }}
        >
          <Box component="span" sx={{ color: "#fff" }}>TV, Film, and</Box>{" "}
          <Box component="span" sx={{ color: "primary.main" }}>Theater</Box>{" "}
          <Box component="span" sx={{ color: "#fff" }}>Actor</Box>
        </Typography>

        <Typography sx={{ mt: 2, color: "rgba(255,255,255,.78)" }}>
          Available for commissions worldwide. Open to diverse roles that challenge range.
        </Typography>
      </motion.div>

      {/* Info Pills (responsive + animated) */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ mt: 3, flexWrap: "wrap", rowGap: 1 }}
        component={motion.div}
        {...fadeUp}
        transition={fast}
      >
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Pill sx={{ width: { xs: "100%", sm: "auto" } }}>
            <>
              <PersonIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: "middle" }} />
              Age {portfolio.age}
            </>
          </Pill>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Pill sx={{ width: { xs: "100%", sm: "auto" } }}>
            Height {portfolio.height}
          </Pill>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Pill sx={{ width: { xs: "100%", sm: "auto" } }}>
            <>
              <PlaceIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: "middle" }} />
              {portfolio.location}
            </>
          </Pill>
        </motion.div>

        {/* NEW: Instagram handle pill */}
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Pill sx={{ width: { xs: "100%", sm: "auto" } }}>
            <>
              <InstagramIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: "middle" }} />
              <Box
                component="a"
                href="https://instagram.com/dharmatejaduba"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "inherit", textDecoration: "none" }}
                aria-label="Instagram profile of Dharma Teja Duba"
              >
                @dharmatejaduba
              </Box>
            </>
          </Pill>
        </motion.div>
      </Stack>

      {/* CTA Buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ mt: 4, flexWrap: "wrap", rowGap: 1 }}
        component={motion.div}
        {...fadeUp}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Button variant="contained" color="primary" startIcon={<PhoneIcon />} href={`tel:${portfolio.phone.replace(/\s+/g,"")}`}>
            Call
          </Button>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Button variant="outlined" color="primary" startIcon={<EmailIcon />} href={`mailto:${portfolio.email}`}>
            Email
          </Button>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Button variant="outlined" color="primary" startIcon={<FileDownloadIcon />} href={portfolio.pdfUrl} download>
            Download PDF
          </Button>
        </motion.div>
        <IconButton href="#showcase" aria-label="Scroll">
          <ArrowDownwardIcon sx={{ color: "rgba(255,255,255,.7)" }} />
        </IconButton>
      </Stack>
    </Grid>
  </Grid>
</Container>
    </Box>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />

      {/* Spacer to offset fixed AppBar height */}
      <Box sx={{ height: { xs: 56, sm: 64 } }} />

      {/* HERO (background image version) */}
      <Hero />

      {/* ABOUT */}
      <Container
        id="about"
        maxWidth="xl"
        sx={{ pt: { xs: 4, md: 6 }, scrollMarginTop: { xs: 64, sm: 72 } }}
      >
        <GlowCard>
          <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }} color="primary.main" gutterBottom>
            About Me
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,.8)" }}>
            Hyderabad-based actor with experience across feature films and digital content. Comfortable with intense drama,
            grounded rural characters, and comedic timing. Seeking roles that showcase emotional range and physical presence.
          </Typography>
        </GlowCard>
      </Container>

      {/* SHOWCASE */}
      <Container
        id="showcase"
        maxWidth="xl"
        sx={{ pt: 3, scrollMarginTop: { xs: 64, sm: 72 } }}
      >
        <Grid container spacing={3}>
          {/* LEFT: Highlights + Film credits */}
          <Grid item xs={12} md={8}>
            <GlowCard>
              <Typography variant="h6" fontWeight={800} sx={{ fontFamily: "Playfair Display, serif", mb: 1 }} color="primary.main">
                Highlights
              </Typography>
              <Box>
                {["Drama", "Comedy", "Action (basic)", "Improvisation", "Lead / Supporting", "Ads & Web Series"].map((h, i) => (
                  <Chip
                    key={h}
                    label={h}
                    sx={{
                      mr: 1,
                      mb: 1,
                      borderRadius: "999px",
                      fontWeight: 700,
                      ...(i < 8
                        ? {
                            background: i === 7 ? "linear-gradient(90deg,#a3885a,#E6C17B)" : "linear-gradient(90deg,#7b61ff,#b07bff)",
                            color: "#111",
                            boxShadow: "0 8px 24px rgba(230,193,123,.25)"
                          }
                        : { border: "1px solid rgba(230,193,123,.35)", color: "rgba(230,193,123,.95)" })
                    }}
                  />
                ))}
              </Box>
            </GlowCard>

            <GlowCard sx={{ mt: 3 }}>
  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
    <MovieCreationIcon fontSize="small" color="primary" />
    <Typography variant="h6" fontWeight={800} sx={{ fontFamily: "Playfair Display, serif" }}>
      Selected Film Credits
    </Typography>
  </Stack>

  <Grid container spacing={2} alignItems="stretch">
    {moviesDetailed.map((m) => (
      <Grid key={m.title} item xs={12} md={6} sx={{ display: "flex" }}>
        <MovieCard movie={m} />
      </Grid>
    ))}
  </Grid>
</GlowCard>

          </Grid>

          {/* RIGHT: Digital list */}
        </Grid>
      </Container>

      {/* LANGUAGES */}
      <Container
        maxWidth="xl"
        sx={{ pt: 3, scrollMarginTop: { xs: 64, sm: 72 } }}
      >
        <Grid item xs={12} md={4}>
            <GlowCard>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                <YouTubeIcon color="error" fontSize="small" />
                <Typography variant="h6" fontWeight={800} sx={{ fontFamily: "Playfair Display, serif" }}>
                  YouTube & Digital
                </Typography>
              </Stack>
              <Stack spacing={1.25}>
                {portfolio.reels.map((r) => (
                  <Box
                    key={r.title}
                    component={motion.div}
                    whileHover={{ y: -2, boxShadow: "0 10px 26px rgba(0,0,0,.25)" }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    sx={{
                      p: 1.25,
                      borderRadius: 3,
                      border: "1px solid rgba(230,193,123,.2)",
                      bgcolor: "background.default",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.25
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        bgcolor: "error.light",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        boxShadow: "0 6px 14px rgba(255,0,0,.25)",
                        flexShrink: 0
                      }}
                    >
                      <YouTubeIcon />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={800}>{r.title}</Typography>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,.7)" }}>{r.channel}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </GlowCard>
          </Grid>
        <GlowCard>
          <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }} color="primary.main">
            Languages
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
            {portfolio.languages.map((l) => (
              <Chip
                key={l}
                label={l}
                sx={{
                  mr: 1,
                  mb: 1,
                  borderRadius: "999px",
                  fontWeight: 700,
                  border: "1px solid rgba(230,193,123,.35)",
                  color: "rgba(230,193,123,.95)"
                }}
              />
            ))}
          </Box>
        </GlowCard>
      </Container>

      {/* GALLERY — 2-up, edge-to-edge full width */}
      <Container
        id="gallery"
        maxWidth={false}
        disableGutters
        sx={{ pt: 3, pb: 8, scrollMarginTop: { xs: 64, sm: 72 } }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Playfair Display, serif", fontWeight: 800, mb: 2, px: { xs: 2, md: 3 } }}
        >
          Photo Gallery
        </Typography>

        <Box
          sx={{
            width: "100vw",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 0
          }}
        >
          {portfolio.photos.map((p, i) => (
            <Box key={p + i}>
              <Photo
                src={p}
                alt={"Dharma Teja photo " + (i + 1)}
                ratio={{ xs: "3 / 4", md: "3 / 4" }}
                maxH={{ md: "unset" }}
                framePx={0}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* CONTACT */}
      <Box
        id="contact"
        sx={{ background: "#0b0907", scrollMarginTop: { xs: 64, sm: 72 } }}
      >
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 800, color: "primary.main", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
                Hire Me for Your New <Box component="span" sx={{ color: "#fff" }}>Creative Project!</Box>
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,.75)" }}>
                I’m available for commissions and happy to act in your movie, play, or series.
              </Typography>

               <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ mt: 4, flexWrap: "wrap", rowGap: 1 }}
        component={motion.div}
        {...fadeUp}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Button variant="contained" color="primary" startIcon={<PhoneIcon />} href={`tel:${portfolio.phone.replace(/\s+/g,"")}`}>
            Call
          </Button>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Button variant="outlined" color="primary" startIcon={<EmailIcon />} href={`mailto:${portfolio.email}`}>
            Email
          </Button>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>
          <Button variant="outlined" color="primary" startIcon={<FileDownloadIcon />} href={portfolio.pdfUrl} download>
            Download PDF
          </Button>
        </motion.div>
        <IconButton href="#showcase" aria-label="Scroll">
          <ArrowDownwardIcon sx={{ color: "rgba(255,255,255,.7)" }} />
        </IconButton>
      </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <GlowCard>
                <Typography variant="caption" sx={{ letterSpacing: 2, color: "primary.main" }}>PERSONAL CONTACTS</Typography>
                <GoldRule sx={{ my: 1 }} />
                <Typography sx={{ fontWeight: 700 }}>{portfolio.phone} • {portfolio.email}</Typography>
                <GoldRule sx={{ my: 2 }} />
                <Typography variant="caption" sx={{ color: "rgba(255,255,255,.7)" }}>
                  Prefer email for audition links and scripts.
                </Typography>
              </GlowCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ borderTop: "1px solid rgba(230,193,123,.2)", bgcolor: "#0e0b09" }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "rgba(255,255,255,.7)" }}>
                © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ textAlign: { xs: "left", md: "right" }, color: "rgba(255,255,255,.7)" }}>
                {portfolio.location}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

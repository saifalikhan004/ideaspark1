import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const BRAND = {
  bg: "#070A12",
  panel: "#0C1222",
  panel2: "#0A1020",
  stroke: "rgba(255,255,255,0.10)",
  text: "#EAF0FF",
  muted: "rgba(234,240,255,0.72)",
  muted2: "rgba(234,240,255,0.56)",
  primary: "#6D5EF6",
  primary2: "#58D7FF",
  success: "#40D39C",
};

function PrimaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.primaryBtn, pressed && { opacity: 0.9 }]}
    >
      <Text style={styles.primaryBtnText}>{label}</Text>
      <Ionicons name="arrow-forward" size={18} color={BRAND.text} />
    </Pressable>
  );
}

function SecondaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.secondaryBtn, pressed && { opacity: 0.9 }]}
    >
      <Ionicons name="sparkles" size={18} color={BRAND.text} />
      <Text style={styles.secondaryBtnText}>{label}</Text>
    </Pressable>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardIcon}>
        <Ionicons name={icon} size={18} color={BRAND.text} />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{description}</Text>
    </View>
  );
}

function StepRow({
  n,
  title,
  body,
}: {
  n: number;
  title: string;
  body: string;
}) {
  return (
    <View style={styles.stepRow}>
      <View style={styles.stepBadge}>
        <Text style={styles.stepBadgeText}>{n}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepBody}>{body}</Text>
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.heroTopRow}>
          <View style={styles.brandMark}>
            <Ionicons name="bulb" size={18} color={BRAND.text} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.brandName}>IdeaSpark</Text>
            <Text style={styles.brandTag}>Turn ideas into next steps.</Text>
          </View>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.appIcon}
            contentFit="cover"
          />
        </View>

        <Text style={styles.h1}>Capture. Clarify. Build momentum.</Text>
        <Text style={styles.lead}>
          IdeaSpark is a simple space to collect ideas, shape them into clear plans, and keep
          moving—one small step at a time.
        </Text>

        <View style={styles.ctaRow}>
          <PrimaryButton
            label="Get started"
            onPress={() => Alert.alert("IdeaSpark", "Welcome! This is your first landing page.")}
          />
          <SecondaryButton
            label="See how it works"
            onPress={() => Alert.alert("IdeaSpark", "Next: add a sign-in or onboarding screen.")}
          />
        </View>

        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Ionicons name="lock-closed" size={14} color={BRAND.muted} />
            <Text style={styles.badgeText}>Private by default</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="flash" size={14} color={BRAND.muted} />
            <Text style={styles.badgeText}>Fast capture</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="checkmark-done" size={14} color={BRAND.muted} />
            <Text style={styles.badgeText}>Actionable steps</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What you can do</Text>
        <Text style={styles.sectionSubtitle}>
          A lightweight workflow for turning "someday" into "done".
        </Text>
        <View style={styles.grid}>
          <FeatureCard
            icon="create"
            title="Capture instantly"
            description="Drop an idea the moment it hits—no friction, no formatting fuss."
          />
          <FeatureCard
            icon="git-branch"
            title="Break it down"
            description="Convert big goals into a handful of small, clear next actions."
          />
          <FeatureCard
            icon="time"
            title="Stay consistent"
            description="Keep focus with a tiny daily plan and gentle momentum." 
          />
        </View>
      </View>

      <View style={[styles.section, styles.sectionAlt]}>
        <Text style={styles.sectionTitle}>How it works</Text>
        <Text style={styles.sectionSubtitle}>Three steps from idea to progress.</Text>
        <View style={styles.steps}>
          <StepRow
            n={1}
            title="Spark"
            body="Write the thought. Keep it raw. Add a quick tag if you want."
          />
          <StepRow
            n={2}
            title="Shape"
            body="Clarify: what does success look like? What’s the next smallest step?"
          />
          <StepRow
            n={3}
            title="Ship"
            body="Do the next step. Check it off. Repeat tomorrow."
          />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.ctaPanel}>
          <View style={{ flex: 1 }}>
            <Text style={styles.ctaTitle}>Ready to spark something?</Text>
            <Text style={styles.ctaBody}>
              This landing page is the starting point—next we can add onboarding, auth, and the
              idea list.
            </Text>
          </View>
          <Pressable
            onPress={() => Alert.alert("IdeaSpark", "Next step: tell me what features you want.")}
            accessibilityRole="button"
            style={({ pressed }) => [styles.ctaSmallBtn, pressed && { opacity: 0.9 }]}
          >
            <Text style={styles.ctaSmallBtnText}>Plan my MVP</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} IdeaSpark</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BRAND.bg,
  },
  container: {
    padding: 20,
    paddingTop: 18,
    paddingBottom: 28,
  },
  hero: {
    borderRadius: 20,
    padding: 18,
    backgroundColor: BRAND.panel,
    borderWidth: 1,
    borderColor: BRAND.stroke,
  },
  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  brandMark: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(109,94,246,0.22)",
    borderWidth: 1,
    borderColor: "rgba(109,94,246,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  brandName: {
    color: BRAND.text,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  brandTag: {
    color: BRAND.muted2,
    fontSize: 12,
    marginTop: 1,
  },
  appIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  h1: {
    color: BRAND.text,
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.2,
    lineHeight: 34,
    marginBottom: 10,
  },
  lead: {
    color: BRAND.muted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  ctaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 14,
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: BRAND.primary,
  },
  primaryBtnText: {
    color: BRAND.text,
    fontSize: 14,
    fontWeight: "700",
  },
  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: "rgba(88,215,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(88,215,255,0.32)",
  },
  secondaryBtnText: {
    color: BRAND.text,
    fontSize: 14,
    fontWeight: "700",
  },
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: BRAND.stroke,
  },
  badgeText: {
    color: BRAND.muted,
    fontSize: 12,
    fontWeight: "600",
  },
  section: {
    marginTop: 18,
  },
  sectionAlt: {
    padding: 16,
    borderRadius: 20,
    backgroundColor: BRAND.panel2,
    borderWidth: 1,
    borderColor: BRAND.stroke,
  },
  sectionTitle: {
    color: BRAND.text,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  sectionSubtitle: {
    color: BRAND.muted2,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "100%",
    borderRadius: 18,
    padding: 14,
    backgroundColor: BRAND.panel,
    borderWidth: 1,
    borderColor: BRAND.stroke,
  },
  cardIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "rgba(64,211,156,0.12)",
    borderWidth: 1,
    borderColor: "rgba(64,211,156,0.30)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardTitle: {
    color: BRAND.text,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },
  cardBody: {
    color: BRAND.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  steps: {
    gap: 12,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: BRAND.stroke,
  },
  stepBadge: {
    width: 28,
    height: 28,
    borderRadius: 9,
    backgroundColor: "rgba(109,94,246,0.22)",
    borderWidth: 1,
    borderColor: "rgba(109,94,246,0.45)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  stepBadgeText: {
    color: BRAND.text,
    fontSize: 12,
    fontWeight: "800",
  },
  stepTitle: {
    color: BRAND.text,
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 2,
  },
  stepBody: {
    color: BRAND.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  ctaPanel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 20,
    backgroundColor: "rgba(109,94,246,0.14)",
    borderWidth: 1,
    borderColor: "rgba(109,94,246,0.32)",
  },
  ctaTitle: {
    color: BRAND.text,
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 4,
  },
  ctaBody: {
    color: BRAND.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  ctaSmallBtn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: BRAND.success,
  },
  ctaSmallBtnText: {
    color: "#04110C",
    fontSize: 13,
    fontWeight: "900",
  },
  footer: {
    marginTop: 18,
    alignItems: "center",
  },
  footerText: {
    color: BRAND.muted2,
    fontSize: 12,
  },
});

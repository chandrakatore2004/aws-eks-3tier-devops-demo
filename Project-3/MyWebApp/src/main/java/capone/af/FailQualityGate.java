public class FailQualityGate {

    public static void main(String[] args) {
        // 1. NullPointerException risk (Critical Bug)
        String message = null;
        System.out.println(message.toString());

        // 2. Hardcoded password (Security Hotspot)
        String password = "SuperSecret123";

        // 3. Code smell: empty catch block
        try {
            int result = 10 / 0;
        } catch (Exception e) {
            // Do nothing - code smell
        }

        // 4. Unused private method (Code Smell)
        log("Unused method");
    }

    private static void log(String msg) {
        // Intentionally unused
    }
}

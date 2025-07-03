# vpn-express-app

This demo runs a TypeScript Express API through ProtonVPN using [Gluetun](https://github.com/qdm12/gluetun), Docker Compose, and pnpm.  
All traffic from the API is routed securely via VPN, making it ideal for privacy-focused applications or region-specific access testing.

---

## Configuration

To run this application, you need to create **two `.env` files**: one in the project root for VPN settings, and another in the `app/` directory for application-specific configuration.

### 1) Root `.env` (VPN configuration for Gluetun)

Create a `.env` file in the **project root** with the following variables:

```dotenv
VPN_SERVICE_PROVIDER=protonvpn
OPENVPN_USER=your_openvpn_username
OPENVPN_PASSWORD=your_openvpn_password
SERVER_COUNTRIES=Japan
```

> 🔐 **ProtonVPN users:** You must use your **OpenVPN credentials**, not your regular Proton account email and password.
> Visit [https://account.protonvpn.com](https://account.protonvpn.com), go to **Account → OpenVPN / IKEv2 username**, and copy the **OpenVPN username and password** from there.

If you want to use a different VPN provider, you can change the `VPN_SERVICE_PROVIDER` value to one of the supported options listed in the [Gluetun documentation](https://github.com/qdm12/gluetun?tab=readme-ov-file#features).

### 2) `app/.env` (App-level configuration)

Create a `.env` file inside the `app/` directory with the following variable:

```dotenv
PORT=3000
```

This specifies the port that the Express server will listen on inside the container.

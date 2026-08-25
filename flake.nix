{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = inputs: {
    devShells =
      builtins.mapAttrs (system: pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
            pnpm
          ];
        };
      })
      inputs.nixpkgs.legacyPackages;
  };
}

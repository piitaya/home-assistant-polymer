import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators";
import "../../components/ha-circular-progress";

@customElement("step-flow-loading")
class StepFlowLoading extends LitElement {
  @property() public label?: string;

  protected render(): TemplateResult {
    return html`
      <div class="init-spinner">
        ${this.label ? html` <div>${this.label}</div> ` : ""}
        <ha-circular-progress active></ha-circular-progress>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      .init-spinner {
        padding: 50px 100px;
        text-align: center;
      }
      ha-circular-progress {
        margin-top: 16px;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "step-flow-loading": StepFlowLoading;
  }
}
